<script lang="ts" setup>
defineProps(['to', 'name'])
</script>

<template>
  <NuxtLink
      :to="to"
      class="border-2 border-[#656565] rounded bg-white text-black w-[200px] h-[50px] all-center my-28 hover:bg-[#80c342] hover:text-white hover:border-[#80c342] duration-500">{{ name }}
  </NuxtLink>
</template>

<style scoped>

</style>
