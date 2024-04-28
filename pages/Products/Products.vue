<script setup>
import USelect from 'nvd-u/components/USelect.vue'
import ProductsCard from "~/components/ProductsCard.vue";

const products = reactive([
  {label: 'PCle M.2 SSD', value: 'PCle M.2 SSD'},
  {label: 'SATA 2.5" SSD', value: 'SATA 2.5" SSD'},
  {label: 'SATA M.2 SSD', value: 'SATA M.2 SSD'},
  {label: 'Memory', value: 'SATA M.2 SSD'},
  {label: 'SATA M.2 SSD', value: 'SATA M.2 SSD'},
  {label: 'SATA M.2 SSD', value: 'SATA M.2 SSD'},
  {label: 'SATA M.2 SSD', value: 'SATA M.2 SSD'},
])
</script>

<template>
  <div class="bg-img bg-center bg-cover w-full h-[50vh]"></div>

  <div class="flex text-start ml-40 my-5 gap-1">
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active" to="/">HOME
    </NuxtLink>
    <span class="text-[#888]">/</span>
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active"
              to="/products/products">
      PRODUCTS
    </NuxtLink>
  </div>

  <div class="relative w-full h-[200px] bg-[#f5f5f5]">
    <div class="all-center absolute left-[30%] top-[30%] translate-x-[-50%] translate-y-[-50%]]">
      <h2>PRODUCT TYPE :</h2>
      <USelect
          :options="products"
          class="border-2 "
          label="All"
          label-field="label"
          value-field="value"
      />
    </div>
  </div>

  <ProductsCard/>
  
</template>

<style scoped>
.bg-img {
  background: url('/assets/Products-Image/bg-img.jpg');
}

.router-link-active {
  border-bottom: none !important;
}
</style>
