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
  <AppCard v-for="movie in store.movies" :key="id" :cardInfo="movie" />
</template>

<style lang="scss" scoped></style>
