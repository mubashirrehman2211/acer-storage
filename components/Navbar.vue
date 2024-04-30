<script setup>
import Magnify from 'nvd-u/icons/Magnify.vue'
import {useProductStore} from "~/stores/product.js";

const product = useProductStore()

</script>

<template>

  <div class="flex text-center justify-around shadow-sm h-[70px]">

    <NuxtLink class="logo mt-2 router-link-active" to="/">
      <img alt="Logo_img" src="/logo.svg">
    </NuxtLink>

    <div class="flex items-start text-start justify-start mt-2">

      <NavLink
          :options="product.productOptions"
          title="PRODUCTS"
          to="/products"
      />

      <NavLink
          :options="product.supportOptions"
          title="SUPPORT"
          to="/support"
      />

      <NavLink
          :options="product.aboutOptions"
          title="ABOUT US"
          to="/about"
      />

    </div>

    <NuxtLink class="all-center" to="/search">
      <Magnify class="text-3xl text-gray-500"/>
    </NuxtLink>

  </div>
</template>

<style scoped>


</style>
