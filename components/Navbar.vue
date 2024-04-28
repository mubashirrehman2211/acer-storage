<script setup>
import Magnify from 'nvd-u/icons/Magnify.vue'
import {useProductStore} from "~/stores/product.js";

const product = useProductStore()

</script>

<template>

  <div class="flex text-center justify-around shadow-sm h-[70px]">

    <NuxtLink class="logo mt-2 router-link-active" to="/">
      <img alt="Logo_img" src="/assets/logo.svg">
    </NuxtLink>

    <div class="flex items-start text-start justify-start mt-2">

      <NavLink
          :options="product.productOptions"
          title="PRODUCTS"
          to="products/products"
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
.logo {
  max-width: 150px;
}

.router-link-exact-active {
  font-weight: bolder;
  color: #000;
}

.router-link-active {
  border-bottom: none !important;
}

</style>
