<template>
  <div class="box-border my-3">
    <ul class="my-2">
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/demo">
        <li>Demo</li>
      </RouterLink>
      <RouterLink to="/auth">
        <li>Auth</li>
      </RouterLink>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
ul li{
  @apply inline p-2 mx-2 bg-neutral-300
  rounded-lg hover:bg-sky-400;
;
}
</style>
