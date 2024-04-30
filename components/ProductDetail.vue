<script setup>
import {useProductStore} from "~/stores/product.js";
import radioBtn from './radioBtn.vue'
import OverViewCard from "~/components/OverViewCard.vue";

const {id} = useRoute().params
const product = useProductStore()
</script>

<template>
  <div class="flex flex-col">

    <div class="link flex mt-4 ml-10">
      <NuxtLink class="text-muted mx-2" to="/">HOME</NuxtLink>
      <span class="text-muted">/</span>
      <NuxtLink class="text-muted mx-2" to="/Products">PRODUCTS</NuxtLink>
      <span class="text-muted">/</span>
      <NuxtLink :to="`/Products-Image/${product.indexCard.title1}`" class="text-muted mx-2">{{
          product.indexCard.title1
        }}
      </NuxtLink>
    </div>
    <hr>

    <div class="flex w-full text-center justify-around">
      <div class="img-scroll all-center flex-col w-[40%]">

        <img :src="`/Products-Image/1-${product.selectedImage}.jpg`" alt="Product_Image" class="w-[40%] mt-3">

        <div class="radio-btn flex">

          <radioBtn :class="{'radio-active' : product.selectedScrollImage === 1}" @click="product.scrollImage(1)"/>

          <radioBtn :class="{'radio-active' : product.selectedScrollImage === 2}" @click="product.scrollImage(2)"/>

          <radioBtn :class="{'radio-active' : product.selectedScrollImage === 3}" @click="product.scrollImage(3)"/>

          <radioBtn :class="{'radio-active' : product.selectedScrollImage === 4}" @click="product.scrollImage(4)"/>

          <radioBtn :class="{'radio-active' : product.selectedScrollImage === 5}" @click="product.scrollImage(5)"/>

        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-start justify-start">{{ title }}</h2>

        <ul v-for="n in product.indexCard.listNo1" :key="n">
          <li class="list-disc text-start justify-start text-muted">{{ n }}</li>
        </ul>
      </div>

    </div>

    <hr>
    <div class="flex my-0 text-center justify-center">
      <h2 class="my-0 mr-3 cursor-pointer text-muted">OVERVIEW</h2>
      <h2 class="my-0 ml-3 cursor-pointer text-muted">SPECIFICATIONS</h2>
      <h2 class="my-0 ml-3 cursor-pointer text-muted">DOWNLOADS</h2>
      <h2 class="my-0 ml-3 cursor-pointer text-muted">RELATED PRODUCTS</h2>
    </div>
    <hr>

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
