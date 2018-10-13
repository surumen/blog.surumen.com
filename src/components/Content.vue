<script>
import helpers from '../helpers/random';
import Icons from './Icons';
import projectsJson from '../data/projects.json';
import workJson from '../data/work.json';
import extrasJson from '../data/extras.json';
export default {
  name: 'Content',
  components: {
    Icons,
  },
  data() {
    const data = {
      projects: projectsJson,
      work: workJson,
      extras: extrasJson,
      links: {
        queer: [
          'https://www.urbandictionary.com/define.php?term=queer',
          'https://www.huffingtonpost.com/nadia-cho/being-queer-means_b_3510828.html',
          'https://www.uua.org/lgbtq/identity/queer',
        ],
        cisgender: [
          'http://www.transstudent.org/definitions',
          'https://www.healthline.com/health/transgender/what-is-cis',
          'https://www.advocate.com/transgender/2015/07/31/true-meaning-word-cisgender',
        ],
        bubbleTea: [
          'https://www.youtube.com/watch?v=xebewT6lh2k',
          'https://www.youtube.com/watch?v=Ct6BUPvE2sM',
        ],
      },
    };
    data.queerLink = helpers.getRandomFromArray(data.links.queer);
    data.cisgenderLink = helpers.getRandomFromArray(data.links.cisgender);
    data.bubbleTeaLink = helpers.getRandomFromArray(data.links.bubbleTea);
    return data;
  },
  computed: {
    featuredProject() {
      return this.projects.find(obj => obj.featured === true);
    },
  },
  methods: {
    onQueerClick() {
      this.queerLink = helpers.getRandomFromArray(this.links.queer);
    },
    onCisgenderClick() {
      this.cisgenderLink = helpers.getRandomFromArray(this.links.cisgender);
    },
    onBubbleTeaClick() {
      this.bubbleTeaLink = helpers.getRandomFromArray(this.links.bubbleTea);
    },
  },
};
</script>

<template>
  <div class="content-wrapper">
    <section class="bg-accent-light">
      <h1>Projects</h1>
      <div 
        class="project" 
        v-for="project in projects" 
        v-if="!project.hidden">
        <h2>
          <a :href="project.link" target="_blank">{{project.title}}</a>
        </h2>
        <p>{{project.description}}</p>
        <p class="project-links">
          <a 
            v-if="!project.hideLinkIcon"
            class="fade-hover"
            :href="project.link"
            target="_blank">
            <Icons icon="link" />
          </a>
          <a 
            v-if="project.github"  
            class="fade-hover"
            :href="project.github"
            target="_blank">
            <Icons icon="code" />
          </a>
          <a 
            v-if="project.dribbble"  
            class="fade-hover"
            :href="project.dribbble"
            target="_blank">
            <Icons icon="dribbble" />
          </a>
        </p>
      </div>
    </section>

    <section class="featured-project" v-if="featuredProject">
      <h1>Featured Project</h1>
      <p v-for="paragraph in featuredProject.longDescription">{{paragraph}}</p>
    </section>
    
    <section class="photo reading-photo"></section>
    <p class="caption">
        Me "reading", a 
        <a href="https://www.flickr.com/photos/wocintechchat/albums" target="_blank">#WOCinTech Chat stock photo</a>
    </p>
    <!-- 
    <section class="photo etsy-photo"></section>
    <p class="caption">Me // First day at Etsy</p>
    -->

    <section class="about">
      <h1>About</h1>
      <p>
        I’m a <a :href="queerLink" v-on:click="onQueerClick()" target="_blank">queer</a> Trinidadian-American <a :href="cisgenderLink" v-on:click="onCisgenderClick()" target="_blank">cisgender</a> woman of color. 
        I work as a Senior Software Engineer at <a href="https://etsy.com" target="_blank">Etsy</a> in New York, and I’ve been 
        active in the engineering world for over 6 years.
      </p>
      <p>
        I was lucky enough to have a supportive mother, who got me thalida.com 
        for my 16th birthday. It was one of the best gifts I’ve ever received, 
        and is the reason I've become the developer I am today.
      </p>
      <p>
        I now work with an amazing team during the day, and in the wee hours of 
        the night I hack away at one of my many side projects. I'm always 
        looking for a coding buddy, so if you're interested, get in touch! 
        <a href="mailto:hello@thalida.com?subject=Oh%20hi!" target="_blank">hello@thalida.com</a>
      </p>
      <p>
        I’m generally full of questions, and <a :href="bubbleTeaLink" v-on:click="onBubbleTeaClick()" target="_blank">bubble tea</a>.
      </p>
    </section>

    <section class="photo coding-photo"></section>
    <p class="caption">
        Me "coding", a 
        <a href="https://www.flickr.com/photos/wocintechchat/albums" target="_blank">#WOCinTech Chat stock photo</a>
    </p>

    <section class="work">
      <h1>Work History</h1>
      <div 
        class="job" 
        v-for="job in work" 
        v-if="!job.hidden">
        <h3 class="job-header">
          <span class="job-company">{{job.company}}</span>
          <span class="job-duration">{{job.duration}}</span>
        </h3>
        <p class="job-title">{{job.title}}</p>
      </div>
    </section>

    <section class="extras bg-accent-light">
      <h1>In the Wild</h1>
      <div 
        class="extra" 
        v-for="extra in extras" 
        v-if="!extra.hidden">
        <h2><a :href="extra.link" target="_blank">{{extra.title}}</a></h2>
        <p>{{extra.description}}</p>
      </div>
    </section>

    <footer class="footer clearfix bg-accent">
      <div class="footer-section text-left">
        <span class="footer-credit">
          Powered by <a href="https://darksky.net/poweredby/" target="_blank">DarkSky</a>
        </span>
        <span class="footer-credit">
          View source on <a href="https://github.com/thalida" target="_blank">Github</a>
        </span>
      </div>
      <div class="footer-section text-right">
        <a href="https://twitter.com/thalidanoel" target="_blank">@thalidanoel</a>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss">
@import '../assets/styles/content.css';
</style>