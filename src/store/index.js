import { createStore } from "vuex";
export default createStore({
  state() {
    return {
isPlaying:false
    };
  },
  mutations: {
    play(state) {
      state.isPlaying = !state.isPlaying;
   
    },
    
  },
});


