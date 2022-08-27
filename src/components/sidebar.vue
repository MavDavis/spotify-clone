<template>
  <div class="p-6">
    <img
      src="../assets/logo.png"
      style="filter: brightness(0) invert(1)"
      alt="logo"
      class="h-10"
    />
  </div>
  <div class="mx-2 mb-5">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="w-full font-semibold text-xs rounded px-3 py-2 items-center justify-start text-lightest flex hover:bg-dark hover:opacity-75"
    >
      <i :class="route.icons"></i>
      <p class="ml-3">{{ route.name }}</p>
    </router-link>
  </div>
  <div class="mx-5">
    <h1 class="text-xs text-lightest tracking-widesrt uppercase">Playlist</h1>
    <button
      class="flex items-center justify-start opacity-75 hover:opacity-100 mt-3"
    >
     <div class="rounded bg-white h-8 w-8 mr-2">
       <i
        class="fas fa-light fa-square-plus text-lightest h-full w-full relative  text-lg"
      ></i>
     </div>
      <p class="text-sm text-white font-semibold">Create Playlist</p>
    </button>
    <button
      class="flex items-center justify-start opacity-75 hover:opacity-100 mt-3"
    >
<div class="purple rounded h-8 w-8 mr-2">
        <i class="fas fa-thin fa-heart text-lightest  mr text-lg"></i>
</div>
      <p class="text-sm text-white font-semibold">Liked Songs</p>
    </button>
    <div class="mx-5">
      <div class="w-full h-10 ">
        <p class=" text-lightest hover:text-white text-sm p-1">
          lorem
        </p>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>

<style lang="scss">
.router-link-active {
  background: #282828;
  color: #fff !important;

  &:hover {
    opacity: 1 !important;
    background: #282828 !important;
  }
}
.purple{
  background: #A4508B;
}
</style>
