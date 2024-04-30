<script lang="ts" setup>
defineProps(['to', 'name'])
</script>

<template>
  <NuxtLink
      :to="to"
      class="btn border-2 border-[#656565] rounded bg-white text-black w-[200px] h-[50px] all-center my-28 hover:bg-[#77bb26] hover:border-[#77bb26] duration-500">
    {{ name }}
  </NuxtLink>
</template>

<style scoped>
.btn:hover {
  color: #fff !important;
}
</style>
