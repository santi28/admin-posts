<template>
  <div class="navbar">
    <button v-if="back" @click="goBack">
      <span class="material-icons-round">&#xe5cb;</span>
      Volver
    </button>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  props: {
    back: Boolean,
    title: String,
  },
  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style scoped>
  .navbar {
    display: flex;
    align-items: center;
    gap: 25px;

    margin-bottom: 15px;
    width: fit-content;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;

    padding: 0;
    border: none;
    background: unset;
    cursor: pointer;
  }

  .chevron_icon {
    width: 2rem;
  }

  h2 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 1.2rem;
  }
</style>
