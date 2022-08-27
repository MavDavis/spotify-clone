<template>
  
<div class="p-2 w-48 card relative"  v-for="(cards,index) in 5" :key="index">
<div class="absolute w-full h-full justify-end items-end p-8 flex">
    <div class="rounded-full bg-green h-10 w-10 flex items-center justify-center">
        <i class="fas fa-play text-white text-xl"></i>
    </div>
</div>
    <div class="bg-light w-full h-auto p-5 shadow-md rounded-lg ">
    <img src="" alt="card-img" class="h-auto w-full shadow mb-2">
    <h1 class="text-sm font-semibold text-white tracking-wide">Love me</h1>
    <h2 class="text-xs text-lightest tracking-wide">Burna Boy</h2>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
// .card{
//     transition: 0.5s;

//     &:hover{
//         transform: translateY(-5px);
//     }
// }
</style>