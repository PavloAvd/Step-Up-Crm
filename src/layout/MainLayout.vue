<template>
  <div class="relative  grid grid-cols-8  " >
      <the-navbar class="col-span-8" />
      <the-sidebar v-if="studentBar"  class="col-span-1"/>
      <div :class="{'col-span-7': studentBar, 'col-span-full':!studentBar }">
          <router-view />
      </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheSidebar from "@/components/TheSidebar";
import { computed } from "vue";
import {useStore } from 'vuex'



export default {
  setup() {
    const store = useStore()
    const studentBar = computed(() => store.state.studentBar)
    return {
      studentBar,

    }
  },
  components: { TheSidebar, TheNavbar }
}

</script>


