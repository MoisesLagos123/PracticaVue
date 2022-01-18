<template>
  <div id="app">
    <TablaBurger></TablaBurger>
  </div>
</template>

<script>

import TablaBurger from './components/TablaBurger.vue'

export default {
  name: 'App',
  components: {
    TablaBurger
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
