<template>
  <div>
    <h1 class="text-center text-white text-4xl">Головна сторінка </h1>
    <h2 class="text-center text-white text-4xl">Новини та фото з івентів чи тренувань </h2>
    <carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: "Home",
  components: {Carousel}
}
</script>

<style scoped>

</style>
