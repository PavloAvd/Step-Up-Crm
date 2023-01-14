<template>
  <div>
    <app-message class="border-2 border-white"></app-message>
    <router-view />
  </div>
</template>

<script>
import Auth from "@/views/Auth";
import AppMessage from "@/components/ui/AppMessage";
export default {

  components: {Auth, AppMessage}
}
</script>

<style scoped>

</style>
