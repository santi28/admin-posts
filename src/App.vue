<template>
  <v-app>
    <Header />
    <div class="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
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
