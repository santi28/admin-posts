<template>
  <v-app>
    <div class="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
  }
  html { overflow: auto !important; }
</style>
