<script>
export default {
  data() {
    return {};
  },
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div>
    {{ cardInfo.title }} <br />
    {{ cardInfo.original_title }} <br />
    {{ cardInfo.language }} <br />
    {{ cardInfo.vote }} <br />
    <img :src="cardInfo.poster" alt="img" />
    <span v-for="i in cardInfo.vote">
      <font-awesome-icon icon="fa-solid fa-star" />
    </span>
    <span v-for="i in 5 - cardInfo.vote">
      <font-awesome-icon icon="fa-regular fa-star" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
