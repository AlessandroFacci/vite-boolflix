<script>
import { store } from "./store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchMovies(word) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: word,
            api_key: "02bab489fc90a269b3344630a53a52ed",
          },
        })
        .then((response) => {
          store.movies = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
            } = movie;
            return {
              id,
              title,
              original_title,
              language: original_language,
              vote: vote_average,
            };
          });
          console.log(this.movies);
        });
    },
  },

  // created() {
  //   this.fetchMovies();
  // },
};
</script>

<template>
  <AppHeader @search-movies="fetchMovies" />
  <AppMain />
  <!-- <ul>
    <li v-for="movie in store.movies" :key="id">
      {{ movie.title }} / {{ movie.original_title }} / {{ movie.language }} /
      {{ movie.vote }} /
    </li>
  </ul> -->
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
