<script>
import { store } from "../../store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <AppCard />
  <ul>
    <li v-for="movie in store.movies" :key="id">
      {{ movie.title }} / {{ movie.original_title }} / {{ movie.language }} /
      {{ movie.vote }} /
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
