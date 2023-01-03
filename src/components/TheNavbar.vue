<template>
   <div class=" flex justify-between  m-2  text-white border-b-2 items-center h-20">

     <img class="object-contain w-24 h-24 ml-10" src="logo.png" >

     <ul class="flex gap-8 mr-8 ">
       <li>
         <router-link to="/" class="hover:border-b-2 hover:border-white"> Головна </router-link>
       </li>
       <li>
         <router-link to="/gallery" class="hover:border-b-2 hover:border-white"> Галерея </router-link>
       </li>
       <li>
         <router-link to="/shop" class="hover:border-b-2 hover:border-white"> Онлайн Шоп </router-link>
       </li>
       <li>
         <router-link to="/contacts" class="hover:border-b-2 hover:border-white"> Контакти </router-link>
       </li>
     </ul>
      <div>
        <button @click="store.commit('closeStudentBar')">Закрити</button>
        <router-link to="/auth" class="mr-10 hover:border-b-2 hover:border-white"> Авторизація </router-link>
      </div>


   </div>
</template>

<script>
import {useStore} from "vuex";
export default {
  setup() {
    const store = useStore()

    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
