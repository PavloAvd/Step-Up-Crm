<template>
  <button class=" rounded-[10px] p-2 w-28 hover:opacity-70 active:opacity-40 text-white  shadow-xl shadow-black"> {{title}}</button>
</template>

<script setup>
const props = defineProps({
  title: String,
  required: true
})
</script>

<style scoped>

</style>
