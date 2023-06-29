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

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.cta-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.cta-container pf-cta {
  margin: 0.5rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

#cards {
  justify-content: center;
  
}

/* pf-card {
  margin: 1rem;
  width: 250px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

:root {
  --pf-c-card--BackgroundColor: #a5a7b8;
} */
</style>

<template class="container">
  <div class="cta-container">
    <apicall />
  </div>
  <div class="cta-container">
    <!-- Your CTAs here -->
  </div>

  <div id="cards" class="card-container">
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
  </div>

  <div id="tabs">
    <tabs />  
  </div>
</template>
