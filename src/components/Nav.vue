<script>
import Icons from './Icons';

export default {
  name: 'GroovyContent',
  components: {
    Icons,
  },
};
</script>
<template>
    <div class="app-left">
      <div class="header">
        <div class="date">
          <span class="day">12</span>
          <span class="month">Aug</span>
          <span class="year">2016</span>
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
          <a href="#" class="button">Demo</a>
        </div>
      </div>
    </div>
</template>
<style lang="postcss">
@import '../assets/styles/projectcard.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>