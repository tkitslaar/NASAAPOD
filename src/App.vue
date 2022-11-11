<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "@patternfly/pfe-cta";
const framework: String = "Vue";
</script>
<template>
  <h1 class="test">This is a {{ framework }} template</h1>
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
</template>
<style>
.test {
  display: grid;
  place-items: center;
}
</style>
