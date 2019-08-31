<template>
  <div id="app">
    <h1>Current world disasters</h1>
    <disasters />
  </div>
</template>

<script>
import Disasters from './components/Disasters.vue'

export default {
  name: 'app',
  components: {
    Disasters
  }
}
</script>

<style>
body {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5em;
  background: #e6fff5;
  text-align: center;
}


</style>
