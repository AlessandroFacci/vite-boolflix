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
  </div>
</template>

<style lang="scss" scoped></style>
