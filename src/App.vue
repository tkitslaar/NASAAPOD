<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "@patternfly/pfe-cta";
import "@patternfly/pfe-card";
import '@patternfly/elements/pf-card/pf-card.js';
import { defineComponent, ref, onMounted } from 'vue';
import apicall from "./components/apicall.vue";

export default defineComponent({
  name: 'app',
  components: {
    apicall
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

  .cta-container pfe-cta {
    margin: 0.5rem;
  }

  pfe-card {
    margin: 1rem;
  }
</style>

<template class="container">
  <div class="cta-container">
    <apicall />
  </div>
  <div class="cta-container">
    <pfe-cta>
      <a href="https://github.com/">GitHub</a>
    </pfe-cta>
    <pfe-cta priority="primary">
      <a href="https://pfelements.github.io/">Learn more about PFElements</a>
    </pfe-cta>
    <pfe-cta priority="secondary">
      <a href="https://redhat.com/">Red Hat</a>
    </pfe-cta>
    <pfe-cta priority="secondary" variant="wind">
      <a href="https://redhat.com/">Red Hat</a>
    </pfe-cta>
    <pfe-cta priority="primary" color="lightest">
      <a href="https://pfelements.github.io/">Learn more about PFElements</a>
    </pfe-cta>
    <pfe-cta priority="secondary" color="complement">
      <a href="https://redhat.com/">Red Hat</a>
    </pfe-cta>
  </div>

  <pfe-card>
    <h2 slot="header">Card header</h2>
    <p>This is the pfe-card body.</p>
    <p slot="footer">This is the footer</p>
  </pfe-card>

  <pf-card>
  <h3 slot="header">Card header</h3>
  <p>This is the pf-card body.</p>
  <pf-button slot="footer">OK</pf-button>
</pf-card>

</template>

