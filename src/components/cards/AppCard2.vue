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
  </div>
</template>

<style lang="scss" scoped></style>
