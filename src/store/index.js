import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      isPlaying: false,
      index: 0,

      currentImageSrc: "https://source.unsplash.com/crs2vlkSe98/400x400",
      playlist: [
        {
          title: "[FREE] Freestyle Type Beat",
          artist: "Unknown",
          url: "https://dl.naslemusic.com/music/1401/04/Hayedeh - Saghi (128-Naslemusic).mp3",
          image: "https://source.unsplash.com/crs2vlkSe98/400x400",
        },
        {
          title: " Hard Drill Instrumental  ",
          artist: "Mastermind Drake x Popsmoke",
          url: "https://dl.naslemusic.com/music/1397/10/Hojat%20Ashrafzadeh%20-%20Asheghe%20Toam%20(128).mp3",
          image: "https://source.unsplash.com/35bE_njbG9E/400x400",
        },
        {
          title: " For My Hand ",
          artist: "Burna Boy -feat. Ed Sheeran",
          url: "../assets/audio/formyhand.mp3",
          image: "https://source.unsplash.com/Esax9RaEl2I/400x400",
        },
        {
          title: "It s Plenty",
          artist: "Burna Boy  ",
          url: "../assets/audio/itsPlenty.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: "Juice WRLD DID (Official Audio)",
          artist: "DJ Khaled - ft. Juice WRLD  ",
          url: "../assets/audio/juicedid.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: "CYMATICS Science",
          artist: "Nigel Stanford  ",
          url: "../assets/audio/physics.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: " Mockingbird ",
          artist: "Eminem ",
          url: "../assets/audio/mockingbird.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: "Sasha Sloan",
          artist: "Older ",
          url: "../assets/audio/older.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: "Hillsong",
          artist: "Silent Night  ",
          url: "../assets/audio/silent.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
        {
          title: "I'm a prisoner",
          artist: "Lucky Dube ",
          url: "../assets/audio/prisoner.mp3",
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
        },
      ],
      player: new Audio(),
      currentTitle: "[FREE] Freestyle Type Beat",
      currentArtist: "Unknown",
      duration: "00:00",
      durationLeft: "",
    };
  },
  mutations: {
    played(state) {
      state.isPlaying = true;
      state.currentTitle = state.playlist[state.index].title;
      state.currentArtist = state.playlist[state.index].artist;
      state.currentImageSrc = state.playlist[state.index].image

      state.player.src = state.playlist[state.index].url;
      state.player.play();
      state.duration = state.player.duration;
      console.log(state.player.duration);
      state.currentImageSrc = state.playlist[state.index].image
    },
    paused(state) {
      state.isPlaying = false;
      state.player.pause();
      state.duration = state.player.duration;
      console.log(state.player.duration)
    },
    next(state) {
      if (state.index <= state.playlist.length - 2) {
        state.index = state.index + 1;
        state.isPlaying = true;
       
        state.currentImageSrc = state.playlist[state.index].image
        state.currentTitle = state.playlist[state.index].title;
        state.currentArtist = state.playlist[state.index].artist;
        state.player.src = state.playlist[state.index].url;
        state.player.play();
        state.duration = state.player.duration;
      }

      
    },
    prev(state) {
      if (state.index > 0) {
        state.index = state.index - 1;
        state.isPlaying = true;
        state.currentImageSrc = state.playlist[state.index].image
        state.currentTitle = state.playlist[state.index].title;
        state.currentArtist = state.playlist[state.index].artist;
        state.player.src = state.playlist[state.index].url;
        state.player.play();
        state.duration = state.player.duration;
      }
    
    },
  },
});
