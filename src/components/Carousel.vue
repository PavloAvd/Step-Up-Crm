<!--<template>-->
<!--  <div class="car-container">-->
<!--    <div class="carousel">-->
<!--      <div v-for="urls in store.getters['gallery/load'] " class="car-image" >-->
<!--        <img :src="urls "  alt="logo.png">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="car-container">
    <div class="carousel">
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
      <img src="logo.png" class="car-image"/>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted} from "vue";

const store =useStore()
// onMounted( async () => {
//     await store.dispatch('gallery/loadCarousel')
// })



</script>
