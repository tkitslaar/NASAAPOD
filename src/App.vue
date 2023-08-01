<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "@patternfly/pfe-cta";
import '@patternfly/elements/pf-card/pf-card.js';
import { defineComponent, ref, onMounted } from 'vue';
import apicall from "./components/apicall.vue";
import '@patternfly/elements/pf-tabs/pf-tabs.js';
import '@patternfly/elements/pf-jump-links/pf-jump-links.js';
import tabs from './components/tabs.vue';
import cards from './components/cards.vue';

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

<template class="container">
  <div class="cta-container">
    <apicall />
  </div>
  <div class="cta-container">
    <pfe-cta priority="primary">
      <a href="https://patternflyelements.org">Learn more about NASA</a>
    </pfe-cta>
  </div>

  <div id="cards">
  <cards />
</div>
  <div id="tabs">
    <tabs />
  </div>

  <a href="#/">NASA APIs</a> |
  <a href="#/about">About APOD</a> |
  <component :is="currentView" />
</template>
