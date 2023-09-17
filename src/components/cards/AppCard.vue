<script>
export default {
  data() {
    return {};
  },
  props: { cardInfo: Object },
};
</script>

<template>
  {{ cardInfo.title }} / {{ cardInfo.original_title }} /
  {{ cardInfo.language }} / {{ cardInfo.vote }} /
</template>

<style lang="scss" scoped></style>
