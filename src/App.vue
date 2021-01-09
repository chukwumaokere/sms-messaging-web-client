<template>
  <router-view/>
</template>

<script>

export default {
  watch: {
    '$route' (to){
      document.title = to.meta.title || "Messages App"
    },
  },
  name: 'App',
}
</script>

<style>
html, body{
  margin: 0; 
  padding: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* margin-top: 60px; */ 
  height: 100%;
  width: 100%;

}
</style>
