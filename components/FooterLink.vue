<script lang="ts" setup>
defineProps(['title', 'options'])
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <h2 class="text-xl">{{ title }}</h2>
    <ul v-for="n in options" class="flex flex-col gap-5 text-[#999]">
      <li class="hover:text-[#fff] duration-500 cursor-pointer">{{ n }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
