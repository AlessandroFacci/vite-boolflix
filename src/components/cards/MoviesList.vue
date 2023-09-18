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
  <div class="container-fluid">
    <h4>Film</h4>
  </div>
  <div class="container-fluid">
    <AppCard v-for="media in store.movies" :key="media.id" :cardInfo="media" />
  </div>

  <div class="container-fluid">
    <h4>Serie TV</h4>
  </div>
  <div class="container-fluid">
    <AppCard v-for="media in store.series" :key="media.id" :cardInfo="media" />
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  width: 1800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  h4 {
    margin: 1.5rem 0;
    color: white;
  }
}
</style>
