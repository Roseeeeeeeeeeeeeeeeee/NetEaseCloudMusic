<template>
  <div id="app">
   <NavComponent/>
    <router-view/>
  </div>
</template>

<script>

import NavComponent from './components/nav.vue';


export default {
  name: 'App',
  components: {
   NavComponent
  }
}
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
