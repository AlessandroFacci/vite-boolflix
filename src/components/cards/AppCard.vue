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
    <span v-for="i in cardInfoMovie.vote">
      <font-awesome-icon icon="fa-solid fa-star" />
    </span>
    <span v-for="i in 5 - cardInfoMovie.vote">
      <font-awesome-icon icon="fa-regular fa-star" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
