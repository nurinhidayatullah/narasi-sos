<script setup lang="ts">
// const {$pwa} = useNuxtApp()
// onMounted(async() => {
//   await $pwa.install()
//   console.log($pwa.isInstalled)
// })
</script>
<template>
  <div class="bg-cloud">
    <NuxtLayout>
      <VitePwaManifest />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
    .bg-cloud {
      background: url('/img/background/bg-cloud.webp') no-repeat;
      background-size: cover;
      width: 100%;
    }
</style>