/* eslint-disable no-param-reassign */
<!-- eslint-disable no-param-reassign -->
<!-- :disabled="Math.random() < 0.5" -->

<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <div class="breadcrumb">
      <Navbar :back="true" title="Ludwig van Beethoven" />
      <div class="button_wrapper">
        <v-btn
          :loading="loadingbtn"
          elevation="0"
          rounded
          class="primary"
          @click="changeState('enable')">Habilitar</v-btn>
        <v-btn
          :loading="loadingbtn"
          elevation="0"
          rounded
          @click="changeState('disable')">Deshabilitar</v-btn>
      </div>
    </div>
    <div class="post_wrapper">
      <Pill
        v-for="post in posts"
        v-model="post.checked"
        :loading="loadingbtn"
        :disabled="post.disabled"
        :key="post.id"
        :title="post.title">
        {{post.body}}
      </Pill>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Pill from '../components/Pill.vue';

export default {
  name: 'Posts',
  components: {
    Navbar,
    Pill,
  },
  data: () => ({
    user: null,
    posts: [],
    loadingbtn: false,
  }),
  methods: {
    async changeState(state = 'diable') {
      this.loadingbtn = true;
      // eslint-disable-next-line no-restricted-syntax
      for (const post of this.posts) {
        if (post.checked) {
          // eslint-disable-next-line no-await-in-loop
          const res = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${post.id}`,
            { disabled: state === 'disable' },
          );
          // eslint-disable-next-line no-param-reassign
          post.disabled = state === 'disable';

          console.log(res);
        }
        // eslint-disable-next-line no-param-reassign
        post.checked = false;
      }
      this.loadingbtn = false;
    },
  },
  async mounted() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
    this.user = res.data;

    const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`);
    this.posts = posts.data.map((post) => {
      const postTransform = {
        ...post,
        checked: false,
        disabled: Math.random() < 0.5,
      };
      return postTransform;
    });
  },
};
</script>

<style scoped>
.home {
  width: 95%;
  max-width: 1500px;
  margin-top: 25px;
}

.breadcrumb {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.post_wrapper {
  display: grid;
  margin-top: 20px;

  grid-template-columns: 1fr;
  grid-gap: 10px;
}

.button_wrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
button { width: 100%; }
.enabled { background-color: #30d8a0; color: white; }
.disabled { background-color: #afafaf; color: white; }

@media (min-width: 650px) {
  button { width: fit-content; }
  .breadcrumb {
    flex-direction: row;
    justify-content: space-between;
  }
  .post_wrapper {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
