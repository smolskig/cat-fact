<template>
  <div id="app">
    <FactCard msg="Welcome to Your Vue.js App"/>
    <div id="adsgoeshere" style="position:absolute; bottom:0; background: #1d1f29; padding-top:60px; text-align: center;" v-html="adsenseContent"></div>
  </div>
</template>

<script>
import FactCard from './components/FactCard.vue'

export default {
  name: 'App',
  data(){
    return{
      adsenseContent:''
    }
  },
  components: {
    FactCard
  },
  mounted:function(){
    this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
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
