<script setup>
import {useProductStore} from "~/stores/product.js";
import radioBtn from './radioBtn.vue'
import OverViewCard from "~/components/OverViewCard.vue";

const product = useProductStore()

function scrolloOnOverview() {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.getElementById('overview').scrollIntoView()
}

function scrolloOnSpecification() {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.getElementById('specification').scrollIntoView()
}

function scrolloOnDownload() {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.getElementById('download').scrollIntoView()
}

function scrolloOnRelatedProduct() {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.getElementById('relatedProduct').scrollIntoView()
}
</script>

<template>
  <div class="flex flex-col">

    <div class="link flex mt-4 ml-10">
      <NuxtLink class="text-muted mx-2" to="/">HOME</NuxtLink>
      <span class="text-muted">/</span>
      <NuxtLink class="text-muted mx-2" to="/Products">PRODUCTS</NuxtLink>
      <span class="text-muted">/</span>
      <NuxtLink :to="`/products/${product.p?.title}`" class="text-muted mx-2">{{ product.p?.title }}
      </NuxtLink>
    </div>
    <hr>

    <div class="flex w-full text-center justify-around">
      <div class="img-scroll all-center flex-col w-[40%]">

        <img :src="product.p?.img" alt="Product_Image" class="w-[40%] mt-3">
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-start justify-start">{{ product.p?.title }}</h2>

        <ul v-for="n in product.p?.list" :key="n">
          <li class="list-disc text-start justify-start text-muted">{{ n }}</li>
        </ul>
      </div>

    </div>

    <hr class="border-gray-100">
    <div class="flex my-1 text-center justify-center">
      <h2 class="my-0 mr-5 cursor-pointer text-gray-500 font-semibold hover:text-[#555]" @click="scrolloOnOverview()">
        OVERVIEW
      </h2>
      <h2 class="my-0 cursor-pointer text-gray-500 font-semibold hover:text-[#555]" @click="scrolloOnSpecification()">
        SPECIFICATIONS
      </h2>
      <h2 class="my-0 ml-5 cursor-pointer text-gray-500 font-semibold hover:text-[#555]" @click="scrolloOnDownload()">
        DOWNLOADS
      </h2>
      <h2 class="my-0 ml-5 cursor-pointer text-gray-500 font-semibold hover:text-[#555]"
          @click="scrolloOnRelatedProduct()">RELATED
        PRODUCTS
      </h2>
    </div>
    <hr class="border-gray-100">

    <div class="overview">


    </div>

  </div>
</template>

<style scoped>
.radio-active {
  background-color: #151414FF;
  border: 2px solid #151414FF;
}
</style>
