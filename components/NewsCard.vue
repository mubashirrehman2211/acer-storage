<script setup>
defineProps(['news', 'title', 'imgSrc'])
</script>

<template>
  <div class="card text-center justify-center w-[400px] hover:text-[#86d145] cursor-pointer">
    <div class="max-w-full max-h-full overflow-hidden">
      <img :src="imgSrc" alt="news-img"
           class="max-w-full max-h-full hover:scale-[1.05] duration-500">
    </div>
    <h2 class="text-xl mt-8 px-2">{{ title }}</h2>
    <p class="p-desc text-xs font-light px-3">{{ news }}</p>
  </div>
</template>

<style scoped>

.p-desc {
  color: #000 !important;
}
</style>
