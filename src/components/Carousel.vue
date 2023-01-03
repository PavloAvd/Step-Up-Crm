<template>
  <div class="car-container">
    <div class="carousel">
      <div v-for="urls in store.getters['gallery/load'] " class="car-image" >
        <img :src="urls "  alt="logo.png">
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted} from "vue";

export default {
  // props: ['carouselImages'],
  setup() {
    const store =useStore()
    onMounted( async () => {
      await store.dispatch('gallery/loadCarousel')
    })

    return {
      store
    }
  }
}

</script>
