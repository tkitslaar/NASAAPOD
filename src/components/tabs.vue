<template>
    <div class="tabs-container">
        <pfe-tabs>
            <pfe-tab role="heading" slot="tab">
                <h1>Tab 1</h1>
            </pfe-tab>
            <pfe-tab-panel role="region" slot="panel">
                <h2>Content 1</h2>
                <p>Tab 1 panel content.</p>
            </pfe-tab-panel>
            <pfe-tab role="heading" slot="tab">
                <h1>Tab 2</h1>
            </pfe-tab>
            <pfe-tab-panel role="region" slot="panel">
                <h2>Content 2</h2>
                <p>Tab 2 panel content.</p>
            </pfe-tab-panel>
            <pfe-tab role="heading" slot="tab">
                <h1>Tab 3</h1>
            </pfe-tab>
            <pfe-tab-panel role="region" slot="panel">
                <h2>Content 3</h2>
                <p>Tab 3 panel content.</p>
            </pfe-tab-panel>
            <pfe-tab role="heading" slot="tab">
                <h1>Tab 4</h1>
            </pfe-tab>
            <pfe-tab-panel role="region" slot="panel">
                <h2>Content 4</h2>
                <p>Tab 4 panel content.</p>
            </pfe-tab-panel>
        </pfe-tabs>


    </div>
</template>
  
<script lang="ts">

import '@patternfly/pfe-tabs/dist/pfe-tabs.min.js';


export default {
    name: 'tabs',
    mounted() {
    }
}
</script>
  
<style scoped>
.tabs-container {
    display: flex;
    justify-content: center;
}
</style>

  