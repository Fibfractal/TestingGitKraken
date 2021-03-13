<template>

  <div>
    <CarItem v-for="(c, index) of cars" :key="index" :car="c" />
  </div>

</template>

<script>
import CarItem from "../components/CarItem.vue";

export default {
  components:{
    CarItem
  },
  // Is a getter used to get data from vuex (store.js)
  computed: {
    // cars can be named to whatever..
    cars(){
      // We access Vue properties by adding $ in front of them
      return this.$store.state.cars
    }
  },
}
</script>

<style>

</style>