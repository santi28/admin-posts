<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
  button {
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 100px;
    background-color: unset;
    cursor: pointer;
    font-family: Poppins;
    font-weight: 500;
  }
</style>
