<template>
  <v-app>
    <Header />
    <div class="app">
      <router-view/>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .app {
    position: relative;
    padding-bottom: 5rem;

    display: flex;
    justify-content: center;
  }
  html { overflow: auto !important; }
</style>
