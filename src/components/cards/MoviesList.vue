<script>
import { store } from "../../store";
import AppCard from "./AppCard.vue";
import AppCard2 from "./AppCard2.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard, AppCard2 },
};
</script>

<template>
  <AppCard v-for="movie in store.movies" :key="id" :cardInfoMovie="movie" />
  <AppCard2 v-for="serie in store.series" :key="id" :cardInfoSerie="serie" />
</template>

<style lang="scss" scoped></style>
