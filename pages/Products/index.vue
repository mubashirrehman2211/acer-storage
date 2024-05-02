<script setup>
import USelect from 'nvd-u/components/USelect.vue'
import {useProductStore} from "~/stores/product.js";

const product = useProductStore()
</script>

<template>
  <div class="bg-img bg-center bg-cover w-full h-[50vh]"></div>

  <div class="flex text-start ml-40 my-5 gap-1">
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active" to="/">HOME
    </NuxtLink>
    <span class="text-[#888]">/</span>
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active"
              to="/products">
      PRODUCTS
    </NuxtLink>

    <span class="text-[#888]">/</span>
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active"
              to="">
      {{ product.selectedProduct }}
    </NuxtLink>
  </div>

  <div class="relative w-full h-[200px] bg-[#f5f5f5]">
    <div class="all-center absolute left-[30%] top-[30%] translate-x-[-50%] translate-y-[-50%]]">
      <h2>PRODUCT TYPE : </h2>

      <USelect
          v-model="product.selectedProduct"
          :options="product.selectOptions"
          class=" text-start justify-start"
          label="All"
      />

    </div>
  </div>

  <div class="grid grid-cols-3 my-20 gap-y-20 mx-52 hover:text-[#86d145]">
    <TransitionGroup name="list">
      <div v-for="p in product?.resultedArray"
           :key="p.id" class="all-center flex-col w-[400px] h-[300px] cursor-pointer">

        <BaseProduct :p="p"/>
      </div>
    </TransitionGroup>
  </div>

  <div v-if="product.resultedArray?.length === 0"
       class="all-center text-xl my-40 border-2 border-gray-100 shadow-sm rounded m-auto px-4 py-8 w-[30%]">
    Sorry! This Product is <span class="text-red-700 ml-1">Out of Stock</span>.
  </div>

</template>

<style scoped>
.bg-img {
  background: url('/Products-Image/bg-img.jpg');
}

.router-link-active {
  border-bottom: none !important;
}
</style>
