<template>
  <div id="app">
    <headers></headers>
    <home></home>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Headers from "../src/layout/Header.vue";

export default {
  name: "App",
  components: {
    Home,
    Headers,
   
  },
};
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
