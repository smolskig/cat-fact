import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content:{},
    catImage:'',
    catFact:''
  },

  mutations: {
    setCatImage(state,status){
      state.catImage = status
    },
    setCatFact(state,status){
      state.catFact = status
    },
    setContent(state,status){
      state.content = status
    }
  },

  actions: {
    requestCardContent({state, dispatch,commit}){
      return new Promise((resolve,reject)=>{
        dispatch('requestCatImage')
          .then(()=>{
            dispatch('requestCatFact')
              .then(()=>{
                resolve({image:state.catImage, fact:state.catFact})
              })
              .catch(err=>{
                reject(console.log('error:', err))
              })
          }) 
          .catch(err=>{
            reject(console.log('error:', err))
          })
      })
    },
    requestCatImage({commit}){
      return new Promise((resolve,reject)=>{
      axios.get(process.env.VUE_APP_GET_PHOTO)
        .then((res)=>{
          commit('setCatImage',res.data[0].url)
          resolve(res.data[0].url)
        })
        .catch(err=>reject(err))
      })
    },
    requestCatFact({commit}){
      return new Promise((resolve,reject)=>{
      axios.get(process.env.VUE_APP_GET_FACT)
        .then((res)=>{
          resolve(res.data.fact)
          commit('setCatFact',res.data.fact)
        })
        .catch(err=>reject(err))
      })
    }
  },

  getters:{
    getContent: state => {
      return {image:state.catImage, fact:state.catFact}
     }
  },
  modules: {
  }
})
