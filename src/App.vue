<template>
  <v-sidebar :navlist="navlist" />
  <v-container>
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      test: 'Lorem ipsum',
      navlist: [
        {
          name: 'mantap',
          icon: 'bi-archive',
          active: true,
        },
        {
          name: 'mantap',
          icon: 'bi-archive',
          active: false,
        },
      ],
    };
  },
  methods: {
    clear(e: Event) {
      e.preventDefault();
    },
  },
});
</script>
