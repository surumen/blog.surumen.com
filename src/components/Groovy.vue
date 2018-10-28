<script>
import Nav from './Nav';
import GroovyContent from './GroovyContent';

export default {
  name: 'Groovy',
  components: {
    Nav,
    GroovyContent,
  },
};
</script>
<template>
  <div id="app">
    <div class="app-left">
      <Nav />
    </div>
    <div class="app-right">
      <GroovyContent />
    </div>
  </div>
</template>
<style lang="postcss">
@import '../assets/styles/content.css';
</style>