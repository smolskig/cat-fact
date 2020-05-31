<template>
  <div class="factCard" @click="reqCardContent()">
    <div class="img-loading" v-if="showLoading">
      <img src="../assets/cat-ico.png" alt="loading-icon">
      <span style="margin-top:50px; font-family:montserrat; text-align:center;">Loading resources...</span>
    </div>
    <div class="img-place">
      <img v-if="!showLoading" :src="content.image" alt="cat-image" />
    </div>
    <div class="obs-place">
      <span v-if="!showLoading">{{content.fact}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      content: {},
      showLoading: true
    };
  },
  created: function() {
    this.reqCardContent();
  },

  methods: {
    reqCardContent() {
      this.showLoading = true
      let mountContent = {}
      this.$store
        .dispatch("requestCatImage")
        .then(res => {
          mountContent.image = res
          this.$store
          .dispatch("requestCatFact")
          .then(res =>{
            mountContent.fact = res 
            this.content = mountContent
            this.showLoading = false 
          });
            
        });
      
      
    }
  }
};
</script>

<style scoped>
.factCard {
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background: #ffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
}
.img-place img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-place{
  width: 100%;
  height: 400px;
}
.obs-place {
  padding: 15px;
  color: #528a8a;
}
.img-loading{
  display:flex;
  flex-direction: column;
  position:absolute;
}
.img-loading img{
  animation: loadingAnimation 1s infinite 0s linear;
}

@keyframes loadingAnimation{
    0%{
        transform: scale(1);
        }
    50%{
        transform: scale(1.1);
        }
    99%{
        transform: rotate(xx) scale(1.0);
        }
}

@media(max-width:700px){
  .factCard{
    width:90%;
  }
  .obs-place {
    font-size:70%;
    color: #528a8a;
  }
  .img-place{
    height:300px;
  }
  .img-loading img{
    width:150px;
  }
}
</style>
