<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfoSerie: Object,
  },
};
</script>

<template>
  <div>
    {{ cardInfoSerie.name }} <br />
    {{ cardInfoSerie.original_name }} <br />
    {{ cardInfoSerie.language }} <br />
    {{ cardInfoSerie.vote }}
    <img :src="cardInfoSerie.poster" alt="img" />
    <span v-for="i in cardInfoSerie.vote">
      <font-awesome-icon icon="fa-solid fa-star" />
    </span>
    <span v-for="i in 5 - cardInfoSerie.vote">
      <font-awesome-icon icon="fa-regular fa-star" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
