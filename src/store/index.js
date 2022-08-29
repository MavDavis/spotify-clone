import { createStore } from "vuex";
export default createStore({
  state() {
    return {
isPlaying:false
,
currentTitle:'Love me',
currentArtist:'Burna Boy',
    };
  },
  mutations: {
    play(state) {
      state.isPlaying = !state.isPlaying;
   
    },
    
  },
});


