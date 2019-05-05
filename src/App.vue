<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/naive">Naive</router-link>
      <router-link to="/better">Better</router-link>
      <router-link to="/simple">Simple</router-link>
    </nav>
    <hr>
    <router-view />
    <div class="end">End of the Vue App</div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav a {
  display: inline-block;
  margin-right: 10px;
}

.end {
  margin-top: 100px;
}
</style>
