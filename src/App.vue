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
              poster_path,
            } = movie;
            return {
              id,
              title,
              original_title,
              language: original_language,
              vote: vote_average,
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
            };
          });
        });
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: word,
            api_key: "02bab489fc90a269b3344630a53a52ed",
          },
        })
        .then((response) => {
          store.series = response.data.results.map((serie) => {
            const {
              id,
              name,
              original_name,
              original_language,
              vote_average,
              poster_path,
            } = serie;
            return {
              id,
              name,
              original_name,
              language: original_language,
              vote: vote_average,
              poster: "https://image.tmdb.org/t/p/w300" + poster_path,
            };
          });
        });
    },
  },

  // fetchSeries(word) {
  //   axios
  //     .get("https://api.themoviedb.org/3/search/tv", {
  //       params: {
  //         query: word,
  //         api_key: "02bab489fc90a269b3344630a53a52ed",
  //       },
  //     })
  //     .then((response) => {
  //       store.series = response.data.results.map((serie) => {
  //         const { id, name, original_name, original_language, vote_average } =
  //           serie;
  //         return {
  //           id,
  //           name,
  //           original_name,
  //           language: original_language,
  //           vote: vote_average,
  //         };
  //       });
  //       console.log(this.series);
  //     });
  // },
};

// created() {
//   this.fetchSeries();
// },
</script>

<template>
  <AppHeader @search-movies="fetchMovies" />
  <AppMain />
  <!-- <ul>
    <li v-for="serie in store.series" :key="id">
      {{ serie.name }} / {{ serie.original_name }} / {{ serie.language }} /
      {{ serie.vote }} /
    </li>
  </ul> -->
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
