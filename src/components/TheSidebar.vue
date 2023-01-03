<template>
  <ul class="ml-4 text-2xl text-white border-white border-r-2 ">
    <li>
      <router-link to="/music" class="hover:border-b-2 hover:border-white"> Музика </router-link>
      <button v-if="role === 'admin'"> + </button>
    </li>
    <li>
      <router-link to="/theory" class="hover:border-b-2 hover:border-white"> Бібліотека </router-link>
    </li>
    <li>
      <router-link to="/journal" class="hover:border-b-2 hover:border-white"> Журнал </router-link>
    </li>
    <li>
      <router-link to="/video-lessons" class="hover:border-b-2 hover:border-white"> Відео Уроки </router-link>
    </li>
    <li>
      <router-link to="/events" class="hover:border-b-2 hover:border-white"> Events </router-link>
    </li>
    <li>
      <router-link to="/chat" class="hover:border-b-2 hover:border-white"> Чат </router-link>
    </li>

  </ul>


</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
 setup () {
   const store = useStore()
   const role = computed( () => store.getters['auth/role'])

   return {
     role
   }
 }

}
</script>


