<template>
   <div class=" grid grid-cols-1 md:grid-cols-3 text-white items-center h-20">
     <img class="object-contain w-24 h-24 ml-10" src="logo.png" >
      <div class="flex justify-between">
        <app-button title="Головна" @click="router.push('/')"></app-button>
        <app-button title="Галерея" @click="router.push('/gallery')"></app-button>
        <app-button title="Мерч" @click="router.push('/shop')"></app-button>
        <app-button title="Контакти" @click="router.push('/contacts')"></app-button>
      </div>
      <div class="justify-self-end">
        <app-button title="Авторизація" @click="router.push('/auth')"></app-button>
      </div>
   </div>
</template>

<script setup>
import AppButton from "@/components/ui/button/AppButton";
import {useStore} from "vuex";
import { useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

</script>

<style scoped>

</style>
