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
  <div class="img-change">
    <div class="card card-cover" style="width: 18rem">
      <img :src="cardInfo.poster" alt="img" />
    </div>
    <div class="card card-content" style="width: 18rem">
      <div class="card-body">
        <h6 class="card-title">{{ cardInfo.title }}</h6>
        <h6 class="card-title">{{ cardInfo.original_title }}</h6>
        <p class="card-text">{{ cardInfo.language }}</p>
        <p class="card-text">
          <span v-for="i in cardInfo.vote" class="star">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
          <span v-for="i in 5 - cardInfo.vote" class="star">
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>
        </p>
        <p class="card-text">{{ cardInfo.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
}
.card-cover {
  width: 342px;
  height: 429px;

  img {
    width: 100%;
    height: 100%;
  }
}
.card-content {
  width: 342px;
  height: 429px;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  display: none;
  overflow-x: hidden;

  .star {
    color: goldenrod;
  }
}
.img-change:hover .card-cover {
  display: none;
}

.img-change:hover .card-content {
  display: block;
}
</style>
