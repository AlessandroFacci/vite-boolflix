<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfoMovie: Object,
  },
};
</script>

<template>
  <div>
    {{ cardInfoMovie.title }} <br />
    {{ cardInfoMovie.original_title }} <br />
    {{ cardInfoMovie.language }} <br />
    {{ cardInfoMovie.vote }} <br />
    <img :src="cardInfoMovie.poster" alt="img" />
    <font-awesome-icon icon="fa-solid fa-star" />
    <font-awesome-icon icon="fa-regular fa-star" />
  </div>
</template>

<style lang="scss" scoped></style>
