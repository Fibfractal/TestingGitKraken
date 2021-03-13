<template>
  <main>
    <Navbar />
    <router-view />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },

  // There is in total 8 different hooks in vue. Each hook represent a lifecycle on vue
  // component. Here we use "created" because we want to grab the data from 
  // our server as soon as possible. 
  created() {
    this.$store.dispatch("initCars");
  },
};
</script>

