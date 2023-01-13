<template>
  <div class="md:absolute grid grid-cols-2  md:grid md:grid-cols-1 gap-4">
    <app-button title="Музика" @click="router.push('/music')"></app-button>
    <app-button title="Бібліотека" @click="router.push('/theory')"></app-button>
    <app-button title="Журнал" @click="router.push('/journal')"></app-button>
    <app-button title="Tutorial" @click="router.push('/video-lessons')"></app-button>
    <app-button title="Events" @click="router.push('/events')"></app-button>
    <app-button title="Чат" @click="router.push('/chat')"></app-button>
  </div>

</template>

<script setup>
import AppButton from '/src/components/ui/button/AppButton'
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const router =useRouter()
const store = useStore()
const role = computed( () => store.getters['auth/role'])

</script>


