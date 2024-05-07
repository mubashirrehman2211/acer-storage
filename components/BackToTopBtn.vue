<script setup>
import ChevronUp from "nvd-u/icons/ChevronUp.vue";
import {useProductStore} from "~/stores/product.js";

const product = useProductStore()

onBeforeUnmount(() => {
  window.removeEventListener("scroll", product?.handleScroll)

})

function scroll() {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.body.scrollIntoView()
}

onMounted(() => {
  window.addEventListener("scroll", product?.handleScroll)
})

</script>

<template>
  <transition name="btn">
    <div v-if="product.showBtn" class="sticky bottom-20 text-right justify-end" @click="scroll()">
      <ChevronUp
          class="all-center text-3xl text-white border-2 rounded-full border-gray-500 bg-gray-500 mr-40 cursor-pointer"/>
    </div>
  </transition>
</template>

<style scoped>
.btn-enter-active {
  animation: btn 0.5s;
}

.btn-leave-active {
  animation: btn 0.5s reverse;
}

@keyframes btn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
