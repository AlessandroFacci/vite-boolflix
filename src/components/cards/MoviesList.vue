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
  <h2>Film</h2>
  <AppCard v-for="media in store.movies" :key="media.id" :cardInfo="media" />
  <h2>Serie TV</h2>
  <AppCard v-for="media in store.series" :key="media.id" :cardInfo="media" />
</template>

<style lang="scss" scoped></style>
