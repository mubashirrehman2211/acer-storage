<script setup>
const product = useProductStore()
</script>

<template>
  <div class="all-center flex-col my-5">
    <h2 id="download" class="text-3xl text-[#333] font-semibold">RELATED PRODUCTS</h2>

    <div class="all-center gap-3">
      <div class="border-[1px] border-gray-100 rounded w-[15%] shadow-sm p-1">
        <img :src="product.indexCard.img1" alt="" class="w-[70%] m-auto">
        <h2>{{ product.indexCard.title1 }}</h2>
      </div>
      <div class="border-[1px] border-gray-100 rounded w-[15%] shadow-sm p-1">
        <img :src="product.indexCard.img2" alt="" class="w-[70%] m-auto">
        <h2>{{ product.indexCard.title2 }}</h2>
      </div>
      <div class="border-[1px] border-gray-100 rounded w-[15%] shadow-sm p-1">
        <img :src="product.indexCard.img3" alt="" class="w-[70%] m-auto">
        <h2>{{ product.indexCard.title3 }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
