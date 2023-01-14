<template>
  <div class="min-h-screen flex flex-col grow bg-greyGradient">
    <component :is=" layout + '-layout' " v-if="layout"  class=""/>
  </div>
</template>

<script>
import {computed} from "vue";
import { useRoute } from 'vue-router'
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import AdminLayout from "@/layout/AdminLayout";


export default {
  components: {MainLayout, AuthLayout,  AdminLayout},

  setup() {
    const route = useRoute()


    return{
      layout: computed(()=>route.meta.layout )
    }
  }
}

</script>

