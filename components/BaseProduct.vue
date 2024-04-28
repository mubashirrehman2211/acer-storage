<script lang="ts" setup>
defineProps(['title', 'imgSrc'])
</script>

<template>
  <div class="all-center flex-col w-[400px] h-[300px] hover:text-[#86d145] cursor-pointer">
    <div>
      <img :src="imgSrc" alt="" class="w-[70%] p-2 hover:scale-110 duration-200 m-auto">
    </div>
    <div>
      <h2 class="text-xl px-2">{{ title }}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>
