<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/add-car">Add Car</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav{
    margin-bottom: 30px;
    padding: 10px;
    border-bottom: 2px solid grey;
  }

  a{
    padding: 20px;
    text-decoration: none;
    color: burlywood;
  }

  a:hover{
    color: rgb(214, 155, 77);
    transition: 0.3s;
  }
</style>