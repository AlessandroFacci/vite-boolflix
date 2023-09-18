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
    fetchMedia(word) {
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
              vote: Math.ceil(vote_average / 2),
              poster: "https://image.tmdb.org/t/p/w342" + poster_path,
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
              title: name,
              original_title: original_name,
              language: original_language,
              vote: Math.ceil(vote_average / 2),
              poster: "https://image.tmdb.org/t/p/w342" + poster_path,
            };
          });
        });
    },
  },
};
</script>

<template>
  <AppHeader @search-media="fetchMedia" />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
body {
  background-color: rgb(42, 41, 41);
}
</style>
