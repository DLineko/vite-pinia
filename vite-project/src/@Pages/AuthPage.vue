<template>
 <div class="bg-green-200 w-full h-full">
   <input class="bg-blue-300 p-1 m-1 rounded-md cursor-pointer
   hover:bg-blue-600 hover:text-white"
          value="input"
          type="button"
          @click="authorize"
   >
   <span class="text-red-500">{{ auth.is_authorized }}</span>
 </div>
</template>

<script setup lang="ts">
import authStore from "@/@Stores/authStore";
const auth = authStore.useAuthStore()

const getRandomString = (): string => {
 return (String(Math.random(36)).substring(2,10))
}
const authorize = () => {
  auth.authenticate(!auth.is_authorized,getRandomString())
}
</script>

<style scoped>

</style>
