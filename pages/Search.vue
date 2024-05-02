<script setup>
import Magnify from "nvd-u/icons/Magnify.vue";
import {useProductStore} from "~/stores/product.js";

const product = useProductStore()
</script>

<template>
  <div class="flex text-start ml-40 my-4 gap-1">
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active" to="/">HOME
    </NuxtLink>
    <span class="text-[#888]">/</span>
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active"
              to="/Search">
      Search
    </NuxtLink>
  </div>
  <hr class="w-full">


  <div class="border-2 rounded all-center w-[300px] h-[50px] my-20 m-auto">
    <input v-model="product.searchValue" class="border-none outline-none pl-1 w-[80%] py-0 font-light"
           placeholder="search"
           type="text">
    <button class="bg-[#80c342] border-2 border-[#80c342] all-center text-3xl w-[20%] h-full -z-10 ">
      <Magnify/>
    </button>
  </div>

  <div>
    <TransitionGroup name="list">
      <ul v-for="p in product?.searchArray">
        <hr class="w-full">
        <li class="all-center text-xl text-[#80c342]">{{ p.title }}</li>
      </ul>
    </TransitionGroup>
  </div>


</template>

<style scoped>

</style>
