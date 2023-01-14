<template>
  <div class="grid ">
    <div class="flex justify-center m-8 ">
      <img src="logo.png" class="w-56">
    </div>

    <form @submit.prevent="onSubmit" class="mx-14 sm:mx-auto mt-8">
      <h1 class="text-white border-white text-center border-b-2 mb-4">Авторизація</h1>
      <div class="grid gap-2">
        <label for="email" class="text-white">Введіть email</label>
        <input
            class="shadow-xl shadow-black"
           :class="['rounded-[10px] p-2 h-10', {'border-2 border-red-500' : eError}]"
            type="email" id="email"
            v-model="email"
            @blur="eBlur"
        >
        <small v-if="eError" class="text-red-500">{{eError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="password" class="text-white">Введіть пароль</label>
        <input
            class="shadow-xl shadow-black"
            :class="['rounded-[10px] h-10 p-2 ', {'border-2 border-red-500' : pError}]"
            type="password"
            id="password"
            v-model="password"
            @blur="pBlur"
        >
        <small v-if="pError" class="text-red-500">{{pError}}</small>
      </div>
      <div class="flex gap-4 justify-between">
        <app-button type="submit" class="w-36 mt-8" title="Увійти" :disabled="isSubmitting || isTooManyAttempts"></app-button>
        <app-button class=" mt-8" title="Реєстрація" @click="router.push('/sign-up')"></app-button>
      </div>
      <div class="flex justify-center mt-8">
        <app-button class=" h-10" title="На головну" @click="router.push('/')"></app-button>
      </div>
    </form>
  </div>

</template>

<script >
import {useLoginForm} from '@/use/login-form'
import AppButton from "@/components/ui/button/AppButton";
import {useRouter} from "vue-router";




export default {
  setup() {
  const router = useRouter()
    return {
      ...useLoginForm(),
      router
    }
  },
  components: {AppButton}
}
</script>


