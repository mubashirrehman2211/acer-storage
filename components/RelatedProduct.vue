<script setup>
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
  <div class="all-center flex-col my-5">
    <h2 id="download" class="text-3xl text-[#333] font-semibold">RELATED PRODUCTS</h2>

    <div class="">
      <ul class="grid grid-cols-3 gap-3 justify-center align-items-center">
        <li v-for="rp in product?.relatedProduct" :key="rp"
            class="border-[1px] border-gray-100 rounded w-[300px] shadow-sm"
            @click="showDetail(rp?.title)">
          <img :src="rp?.img" alt="" class="w-[70%] m-auto">
          <h2>{{ rp?.title }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
