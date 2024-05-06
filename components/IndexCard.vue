<script lang="ts" setup>
import {useRouter} from "vue-router";

const product = useProductStore()
const router = useRouter()

function showDetail(detail) {
  router.push(`/products/${detail}`)
}
</script>

<template>
  <div class="product-container all-center flex-col">
    <header class="text-4xl font-semibold my-20">Products</header>
    <div class="grid grid-cols-3 mt-10 gap-y-48 mx-52">
      <div v-for="p in product?.indexProductArray"
           :key="p?.id"
           class="all-center flex-col w-[400px] h-[300px] hover:text-[#86d145] cursor-pointer"
           @click="showDetail(p?.title)">
        <img :src="p?.img" alt="" class="w-[70%] p-2 hover:scale-110 duration-200">

        <h2 class="text-xl px-2">{{ p?.title }}</h2>
        <ul v-for="item in p?.list" :key="item">
          <li class="p-desc font-light">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-20">
      <IndexBtn
          name="EXPLORE PRODUCTS"
          to="/products/products"
      />
    </div>
  </div>
</template>

<style scoped>
.p-desc {
  color: #000 !important;
}
</style>
