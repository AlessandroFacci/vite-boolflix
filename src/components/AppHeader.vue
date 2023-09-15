<script>
export default {
  data() {
    return {
      word: "",
    };
  },

  emit: ["search-movies"],
};
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Boolflix</a>
      <form
        @submit.prevent="$emit('search-movies', word)"
        class="d-flex"
        role="search"
      >
        <input
          v-model="word"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
