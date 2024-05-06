<script lang="ts" setup>
defineProps(['title', 'desc', 'imgSrc'])
</script>

<template>
  <div class="all-center my-40">
    <div class="w-[40%] mr-20">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <p class="p-4">{{ desc }}</p>
    </div>
    <div class="w-[40%]">
      <img :src="imgSrc" alt="img" class="w-[80%] rounded-xl">
    </div>
  </div>
</template>

<style scoped>

</style>
