<template>
  <div id="app">
    <div class="title">
      <span >Click on the card to get a new random photo and fact</span>
    </div>
    <FactCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FactCard from './components/FactCard.vue'

export default {
  name: 'App',
  components: {
    FactCard
  }
}
</script>

<style>
#app {
  display:flex;
  flex-direction: column;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
.title{
  position:absolute;
  top:10%;
  left: 50%;
  width:100%;
  transform: translate(-50%, -50%);
  color:#A9D9D9;
  font-weight: bold;
  font-size:35px;
  font-family:'montserrat';
  text-align: center;
}

@media(max-width:700px){
  .title{
    font-size:20px;
  }
}
</style>
