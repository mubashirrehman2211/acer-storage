<script setup>

import {useProductStore} from "~/stores/product.js";

const product = useProductStore()


onMounted(() => {
  product.animateSlide()
})
</script>

<template>
  <img :src="`/assets/image/${product.selectedImage}.jpg`"
       alt="bg-img"
       class="w-full h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed m-0 p-0"/>

  <div class="flex absolute left-[50%] bottom-[2%] translate-x-[-50%] translate-y-[-50%]">

    <button :class="{'bar-1': product.selectedImage === 1}"
            class="progress-bar w-[50px] h-[2px] bg-[rgba(255,255,255,.3)] rounded-[1px] m-[6px] cursor-pointer overflow-hidden"
            @click="product.nextSlide(1)">
    </button>

    <button :class="{'bar-1': product.selectedImage === 2}"
            class="progress-bar w-[50px] h-[2px] bg-[rgba(255,255,255,.3)] rounded-[1px] m-[6px] cursor-pointer overflow-hidden"
            @click="product.nextSlide(2)">
    </button>

    <button :class="{'bar-1': product.selectedImage === 3}"
            class="progress-bar w-[50px] h-[2px] bg-[rgba(255,255,255,.3)] rounded-[1px] m-[6px] cursor-pointer overflow-hidden"
            @click="product.nextSlide(3)">
    </button>

  </div>
</template>

<style scoped>
.bar-1 {
  position: relative;
}

.bar-1::after {
  content: '';
  width: 0;
  border: 2px solid #fff;
  position: absolute;
  left: -1px;
  top: -1.1408px;
  animation: fill 5s linear forwards;
}

@keyframes fill {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
