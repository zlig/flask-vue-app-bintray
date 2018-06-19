<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <b-nav justified tabs>
      <b-nav-item active>Hello</b-nav-item>
      <b-nav-item>Bye</b-nav-item>
      <b-nav-item>Not Found</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
