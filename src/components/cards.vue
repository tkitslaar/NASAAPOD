<template>
<div id="cards" class="card-container">
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
  </template>

<script lang="ts">

import "@patternfly/elements/pf-card/pf-card.js";


export default {
    name: 'cards',
    mounted() {
    }
}
</script>