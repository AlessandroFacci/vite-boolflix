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
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand">Boolflix</a>
      <form
        @submit.prevent="$emit('search-media', word)"
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
        <button class="btn" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: black;
  a {
    color: rgba(255, 0, 0, 0.729);
    font-size: 2rem;
    text-decoration: none;
  }
  input {
    height: 2rem;
  }
  button {
    height: 2rem;
    background-color: white;
    padding: 0 0.5rem;
  }
}
</style>
