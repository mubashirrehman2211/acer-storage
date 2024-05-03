<script lang="ts" setup>

import {useProductStore} from "~/stores/product";
import {useRouter} from "vue-router";

const product = useProductStore()
const router = useRouter()

function showDetail(detail) {
  product.selectItem = detail
  router.push(`/products/${detail}`)
}
</script>

<template>
  <div class="grid grid-cols-3 my-20 gap-y-20 mx-52 hover:text-[#86d145]">
    <TransitionGroup name="list">
      <div v-for="p in product?.resultedArray"
           :key="p.id" class="all-center flex-col w-[400px] h-[300px] cursor-pointer">
        <div @click="showDetail(p?.title)">
          <img :src="p?.img" alt="" class="w-[70%] p-2 hover:scale-110 duration-200 m-auto">
        </div>
        <div>
          <h2 id="pTitle" class="text-xl text-black px-2">{{ p?.title }}</h2>
        </div>

      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

</style>
