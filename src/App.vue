<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      movies: [],
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
          this.movies = response.data.results;
          console.log(this.movies);
        });
    },
  },

  created() {
    this.fetchMovies();
  },
};
</script>

<template>
  <AppHeader @search-movies="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
