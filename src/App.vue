<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "@patternfly/pfe-cta";
import "@patternfly/pfe-card";
import '@patternfly/elements/pf-card/pf-card.js';
import { defineComponent, ref, onMounted } from 'vue';
import apicall from "./components/apicall.vue";
import "@patternfly/elements/pf-card/pf-card.js";
import '@patternfly/elements/pf-tabs/pf-tabs.js';
import '@patternfly/elements/pf-jump-links/pf-jump-links.js';
import tabs from './components/tabs.vue';

export default defineComponent({
  name: 'app',
  props: {
    msg: String
  },
  components: {
    apicall,
    tabs
  }
})

</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<style>
</style>

<template class="container">
  <div class="cta-container">
    <apicall />
  </div>
  <div class="cta-container">
    <!-- Your CTAs here -->
  </div>

  <!-- <div id="cards" class="card-container">
    <pf-card class="pf-m-selectable">
      <h3 slot="header">Card 1</h3>
      <p>This is the pf-card body.</p>
      <pf-cta slot="footer" priority="primary">
        <a href="#">Learn More</a>
      </pf-cta>
    </pf-card>

    <pf-card rounded>
      <h3 slot="header">Card 2</h3>
      <p>This is the pf-card body.</p>
      <pf-cta slot="footer" priority="primary">
        <a href="#">Learn More</a>
      </pf-cta>
    </pf-card>

    <pf-card rounded>
      <h3 slot="header">Card 3</h3>
      <p>This is the pf-card body.</p>
      <pf-cta slot="footer" priority="primary">
        <a href="#">Learn More</a>
      </pf-cta>
    </pf-card>

    <pf-card rounded>
      <h3 slot="header">Card 4</h3>
      <p>This is the pf-card body.</p>
      <pf-cta slot="footer" priority="primary">
        <a href="#">Learn More</a>
      </pf-cta>
    </pf-card>
  </div> -->

  <div id="tabs">
    <tabs />  
  </div>

  <a href="#/">NASA APIs</a> |
  <a href="#/about">About APOD</a> |
  <component :is="currentView" />
  
</template>
