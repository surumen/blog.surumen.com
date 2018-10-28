<template>
  <div class="scene-wrapper">
    <div class="shape-clock">
      <Shapes shape="hexagon" />
      <Shapes shape="circle" />
      <Shapes shape="triangle" />
      <Shapes shape="diamond" />
      <Shapes shape="hexagon" />
      <Shapes shape="rectangle" />
      <Shapes shape="pentagon" />
      <Shapes shape="octagon" />
    </div>
    <div class="scene-copy">
      <h1 class="greeting">Oh hi! How&rsquo;d ya sleep?</h1>
      <p class="weather">It’s currently 51° and mostly cloudly</p>
      <p class="byline">I’m Thalida btw, a {{currentWork.title}} and {{randomFact}}.</p>
    </div>
  </div>
</template>

<script>
import Shapes from './Shapes';

export default {
  name: 'Scene',
  components: {
    Shapes,
  }
} 
</script>

<style lang="postcss">
@import '../assets/styles/scene.css';
</style>
