<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh">
      <div class="w-56 bg-black h-full flex-none">
        <Sidebar/>
      </div>
   <router-view/>
    </div>
    <div class="ww-full bg-light" style="height: 12vh">
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "./components/sidebar.vue";

import Footer from "./components/footer.vue";

export default {
  name: "Home",
  created() {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/infos",
      headers: {
        "X-RapidAPI-Key": "459994e2damsh0c32bb02861e4adp132ac1jsn91f2f0431102",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  components: { Sidebar, Footer },
};
</script>

<style></style>
