<template>
  <div class="grid mb-10" >
    <div class="flex justify-center m-8 ">
      <img src="logo.png" class="w-56">
    </div>

    <form @submit.prevent="onSignUp" class="mx-14 sm:mx-auto mt-8">
      <h1 class="text-white border-white text-center border-b-2 mb-4">Зареєструватися</h1>
      <div class="grid gap-2">
        <label for="email" class="text-white" >Email</label>
        <input :class="['pl-2  rounded-[10px] h-10', {'border-2 border-red-500' : eError}]" type="email" id="email" v-model="email">
        <small v-if="eError" class="text-red-500">{{eError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="password" class="text-white">Пароль</label>
        <input :class="['pl-2  rounded-[10px] h-10', {'border-2 border-red-500' : pError}]" type="password" id="password" v-model="password">
        <small v-if="pError" class="text-red-500">{{pError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="fullName" class="text-white">Прізвище та ім'я </label>
        <input type="text" id="fullName" class="pl-2  rounded-[10px] h-10" v-model="fullName">
        <small v-if="nError" class="text-red-500">{{nError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="bDate" class="text-white">Дата народження</label>
        <input type="date" id="bDate" class="pl-2  rounded-[10px] h-10" v-model="bDate">
        <small v-if="bError" class="text-red-500">{{bError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="phone" class="text-white">Номер телефону </label>
        <input type="tel" id="phone" placeholder="+380" class="pl-2 rounded-[10px] h-10" v-model="phone">
        <small v-if="phError" class="text-red-500">{{phError}}</small>
      </div>
      <div class="grid gap-2 mt-8">
        <label for="zone" class="text-white">Ваш Філіал</label>
        <select id="zone" class="pl-2 rounded-[10px] h-10" v-model="zone">
          <option>Калинова</option>
          <option>Тополя</option>
          <option>Перемога</option>
          <option>Парус</option>
        </select>
      </div>
      <div class="grid gap-2 mt-4">
        <label for="d-code" class="text-white">Код танцівника</label>
        <input class="pl-2 rounded-[10px] h-10" type="password" id="d-code" v-model="dCode">
        <small v-if="dCodeError" class="text-red-500">{{dCodeError}}</small>
      </div>
      <div class="flex gap-4 justify-between">
        <app-button type="submit" class="w-36 mt-8" title="Підтвердити" :disabled="isSubmitting || isTooManyAttempts"></app-button>
        <app-button class=" mt-8" title="На головну" @click="router.push('/')"></app-button>
      </div>
    </form>
</div>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useSignUpForm} from "@/use/sign-up-form";
import AppButton from "@/components/ui/button/AppButton";
import {useRouter} from "vue-router";
export default {
 setup(){
   const router = useRouter()
   return {
     ...useSignUpForm(),
     router
   }
 },
  components: {AppButton}

}
</script>

<style scoped>

</style>
