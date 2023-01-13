<template>
    <div class="grid gap-4">
      <div>
        <the-navbar class="" />
      </div>
      <div class="mt-20 lg:mt-20">
        <the-sidebar />
      </div>
      <div>
        <router-view />
      </div>

    </div>

</template>

<script setup>
import TheNavbar from "@/components/TheNavbar";
import TheSidebar from "@/components/TheSidebar";
import { computed } from "vue";
import {useStore } from 'vuex'

const store = useStore()
const studentBar = computed(() => store.state.studentBar)

</script>


