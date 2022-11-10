<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "@patternfly/pfe-accordion";
const framework: String = "Vue";
</script>
<template>
  <h1 class="test">This is a {{ framework }} template</h1>
</template>
<style>
.test {
  display: grid;
  place-items: center;
}
</style>
