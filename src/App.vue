<template>
  <v-sidebar />
  <div class="container">
    <h1>hell yeah</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
      itaque assumenda adipisci vero placeat, illum modi deserunt totam maxime
      at amet possimus, excepturi aliquid ab tempore vitae error voluptates
      earum?
    </p>
    <v-input
      v-model="test"
      type="text"
      icon="bi-search"
      placeholder="Search"
      clear-button
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VInput from './components/VInput.vue';
import VSidebar from './components/VSidebar.vue';

export default defineComponent({
  name: 'App',
  components: { VSidebar, VInput },
  data() {
    return {
      test: 'Lorem ipsum',
    };
  },
  methods: {
    clear(e: Event) {
      e.preventDefault();
    },
  },
});
</script>

<style lang="less">
@import 'normalize.css/normalize.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
}
.container {
  max-width: 1024px;
  width: 100%;
  padding: 20px 40px;
  @media @maxPhone {
    padding: 0 5px;
  }
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 500;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: @surface0;
  color: #fff;
  font-size: 14px;
}
input,
button {
  border: none;
  border-radius: 2;
  font-size: 14px;
  color: #fff;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: none;
  &:focus {
    outline: none;
  }
}
button {
  cursor: pointer;
}
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
*::-webkit-scrollbar-track {
  opacity: 0;
}
*::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #7d7d7d;
}
.bi {
  font-size: 16px;
}
</style>
