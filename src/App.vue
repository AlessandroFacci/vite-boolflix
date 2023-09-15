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
    fetchMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: "anelli",
            api_key: "02bab489fc90a269b3344630a53a52ed",
          },
        })
        .then((response) => {
          console.log(response.data.results);
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
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
