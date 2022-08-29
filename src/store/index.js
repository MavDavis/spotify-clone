import { createStore } from "vuex";
export default createStore({
  state() {
    return {
isPlaying:false
,
index:4,

currentImageSrc:"https://source.unsplash.com/crs2vlkSe98/400x400",
  playlist: [
      {
        title: "[FREE] Freestyle Type Beat",
        artist: "Unknown",
        url: "../assets/audio/beats.mp3",
        image: "https://source.unsplash.com/crs2vlkSe98/400x400"
      },
      {
        title: " Hard Drill Instrumental  ",
        artist: "Mastermind Drake x Popsmoke",
        url: "../assets/audio/hardDrill.mp3",
        image: "https://source.unsplash.com/35bE_njbG9E/400x400"
      },
      {
        title: " For My Hand ",
        artist: "Burna Boy -feat. Ed Sheeran",
        url: "../assets/audio/formyhand.mp3",
        image: "https://source.unsplash.com/Esax9RaEl2I/400x400"
      },
      {
        title: "It s Plenty",
        artist: "Burna Boy  ",
        url: "../assets/audio/itsPlenty.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: "Juice WRLD DID (Official Audio)",
        artist: "DJ Khaled - ft. Juice WRLD  ",
        url: "../assets/audio/juicedid.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: "CYMATICS Science",
        artist: "Nigel Stanford  ",
        url:"../assets/audio/physics.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: " Mockingbird ",
      artist: "Eminem ",
        url: "../assets/audio/mockingbird.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: "Sasha Sloan",
       artist: "Older ",
        url: "../assets/audio/older.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: "Hillsong",
        artist: "Silent Night  ",
        url: "../assets/audio/silent.mp3",
        image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      },
      {
        title: "I'm a prisoner",
        artist: "Lucky Dube ",
        url: "../assets/audio/prisoner.mp3",
       image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
      }
    ],
    player: new Audio(),
currentTitle:'Love me',
currentArtist:'Burna Boy',
    };
  },
  mutations: {
    played(state) {
      state.isPlaying = !state.isPlaying;
   state.player.src =state.playlist[state.index].url;
   state.player.play()
    },
    
  },
});


