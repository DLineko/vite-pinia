
<script setup lang="ts">
import authStore from "@/@Stores/authStore";
const auth = authStore.useAuthStore()
</script>

<template>
  <div class="bg-pink-200 h-full w-full">
    this is dash for user {{ auth.username}}
  </div>
</template>


<style scoped>

</style>
