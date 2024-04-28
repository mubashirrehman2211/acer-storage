<script setup>
defineProps(['title'])
</script>

<template>
  <div>
    <div class="border-2 rounded w-[98%] h-[200px] text-start bg-white text-gray-950 p-2 shadow-md my-2">
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>
