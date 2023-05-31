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

export default defineComponent({
  name: 'app',
  props: {
    msg: String
  },
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

.cta-container pf-cta {
  margin: 0.5rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

pf-card {
  margin: 1rem;
  width: 250px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.tabs-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

pf-tabs {
  --pf-c-tabs__item--BackgroundColor: #fff;
  --pf-c-tabs__item--m-current--BackgroundColor: #a5a7b8;
  --pf-c-tabs__item--hover--BackgroundColor: #f0f0f0;
  --pf-c-tabs--before--BorderColor: #a5a7b8;
  --pf-c-tabs__item--m-current--Color: #fff;
  --pf-c-tabs__item--Color: #000;
  --pf-c-tabs__item--hover--Color: #000;
  --pf-c-tabs__item--BorderColor: #a5a7b8;
  --pf-c-tabs__item--m-current--ZIndex: 1;
  --pf-c-tabs--Inset: 0;
  margin-top: 2rem;
  width: 100%;
}


pf-tab {
  --pf-c-tabs__item--m-current--BackgroundColor: #007bba;
  --pf-c-tabs__item--m-current--Color: #ffffff;
}

pf-tab-panel {
  padding: 1em;
}

:root {
  --pf-c-card--BackgroundColor: #a5a7b8;
}
</style>

<template class="container">
  <div class="cta-container">
    <apicall />
  </div>
  <div class="cta-container">
    <!-- Your CTAs here -->
  </div>

  <div class="card-container">
    <pf-card rounded>
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

  <div class="tabs-container">
    <pf-tabs>
      <pf-tab slot="tab">Users</pf-tab>
      <pf-tab-panel>Users</pf-tab-panel>
      <pf-tab slot="tab">Containers</pf-tab>
      <pf-tab-panel>Containers</pf-tab-panel>
      <pf-tab slot="tab">Database</pf-tab>
      <pf-tab-panel>Database</pf-tab-panel>
    </pf-tabs>
  </div>
</template>
