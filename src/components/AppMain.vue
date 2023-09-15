<script>
import MoviesList from "./cards/MoviesList.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  components: { MoviesList },
};
</script>

<template>
  <MoviesList />
</template>

<style lang="scss" scoped></style>
