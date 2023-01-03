<template>
  <div class="car-container">
    <div class="carousel">
      {{store.getters['gallery/load']}}
      <div v-for="urls in store.getters['gallery/load'] " class="car-image" >
        <img :src="urls "  alt="logo.png">
      </div>

<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
<!--      <div class="car-image"><img src="logo.png" alt="here wil be image"></div>-->
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {computed, onBeforeMount, onMounted} from "vue";

export default {
  // props: ['carouselImages'],
  setup() {
    let carouselUrls = []
    const store =useStore()
    onMounted( async () => {
        await store.dispatch('gallery/loadCarousel')
        console.log(store.getters['gallery/load'])
       carouselUrls =  store.getters['gallery/load']
    })

    return {
      carouselUrls,
      store
    }
  }

}

</script>
