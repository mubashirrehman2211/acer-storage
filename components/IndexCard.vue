<script lang="ts" setup>
defineProps(['list', 'title', 'imgSrc'])
</script>

<template>
  <div class="all-center flex-col w-[400px] h-[300px] hover:text-[#86d145] cursor-pointer">
    <img :src="imgSrc" alt="" class="w-[70%] p-2 hover:scale-110 duration-200">
    <h2 class="text-xl px-2">{{ title }}</h2>`
    <ul v-for="item in list" :key="item">
      <li class="p-desc font-light">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.p-desc {
  color: #000 !important;
}
</style>
