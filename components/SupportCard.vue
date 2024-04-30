<script setup>
defineProps(['title'])
</script>

<template>
  <div class="border-2 border-gray-100 rounded w-[30%] text-start bg-white text-gray-950 shadow-md p-3 m-2">
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <slot/>
  </div>
</template>
