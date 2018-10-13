<script>
import Scene from './Scene';
import Content from './Content';

export default {
    name: 'Home',
    components: {
      Scene,
      Content,
    },
  };
</script>

<template>
  <div id="app">
    <div class="app-left">
      <Scene />
    </div>
    <div class="app-right">
      <Content />
    </div>
  </div>
</template>

<style lang="postcss">
@import '../assets/styles/home.css';
</style>
