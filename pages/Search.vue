<script setup>
import Magnify from "nvd-u/icons/Magnify.vue";
import {useProductStore} from "~/stores/product.js";
import {useRouter} from "vue-router";

const product = useProductStore()
const router = useRouter()

function showDetail(detail) {
  product.selectItem = detail
  router.push(`/products/${detail}`)
}
</script>

<template>
  <div class="flex text-start ml-40 my-4 gap-1">
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active" to="/">HOME
    </NuxtLink>
    <span class="text-[#888]">/</span>
    <NuxtLink class="text-[#888] hover:text-[#86d145] duration-300 cursor-pointer router-link-active"
              to="/Search">
      SEARCH
    </NuxtLink>
  </div>
  <hr class="w-full">

  <div class="my-10">
    <TransitionGroup name="list">
      <ul v-for="p in product?.searchArray" :key="p">
        <hr class="w-[80%] m-auto">
        <NuxtLink :to="`/products/${p.title}`" class="all-center">
          <img :src="p?.img" alt="p-img" class="w-40 h-40 rounded-full mx-10 my-3 hover:bg-gray-100">
          <li class="all-center text-xl text-[#80c342]" @click="showDetail(p.title)">{{ p?.title }}
            <span
                class="ml-10 text-lg text-[#555]">(PRODUCT)
            </span>
          </li>
        </NuxtLink>
      </ul>
    </TransitionGroup>

    <div v-if="!product?.searchArray" class="my-60">
      <span class="all-center text-muted">Search the product which you want</span>
    </div>

    <div v-if="product.searchArray?.length === 0" class="my-60">
      <span class="text-muted all-center">No Match Found</span>
    </div>
  </div>


</template>

<style scoped>
</style>
