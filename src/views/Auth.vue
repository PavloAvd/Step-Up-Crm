<template>
  <div class="container mx-auto h-screen border-4 border-amber-50 ">

    <router-link to="/" class="text-white hover:text-cyan-200"> На головну </router-link>
    <router-link to="/sign-up" class="text-white hover:text-cyan-200"> Зреєструватись </router-link>

    <form @submit.prevent="onSubmit" class="p-8 border-4  w-1/3 mx-auto mt-20">

      <h1 class="text-white border-white text-center border-b-2 mb-4">Авторизація</h1>

      <div class="grid gap-2">
        <label for="email" class="text-white">Введіть email</label>
        <input
           :class="['rounded-[10px] h-10', {'border-2 border-red-500' : eError}]"
            type="email" id="email"
            v-model="email"
            @blur="eBlur"
        >
        <small v-if="eError" class="text-red-500">{{eError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="password" class="text-white">Введіть пароль</label>
        <input
            :class="['rounded-[10px] h-10', {'border-2 border-red-500' : pError}]"
            type="password"
            id="password"
            v-model="password"
            @blur="pBlur"
        >
        <small v-if="pError" class="text-red-500">{{pError}}</small>
      </div>

      <button type="submit"  class="text-white mt-4 p-2 border-2 rounded-2xl w-20" :disabled="isSubmitting || isTooManyAttempts"> Увіти </button>

    </form>
  </div>

</template>

<script>
import {useLoginForm} from '@/use/login-form'




export default {
  setup() {

    return {
      ...useLoginForm()
    }
  }
}
</script>


