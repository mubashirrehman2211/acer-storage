<script setup>
import ImageSlider from '../components/ImageSlider.vue'
import IndexNewsCard from '../components/IndexNewsCard.vue'
import {useProductStore} from "~/stores/product.js";
import {onBeforeMount, onMounted} from "vue";
import ChevronUp from "nvd-u/icons/ChevronUp.vue";

const product = useProductStore()


onMounted(() => {
  product.reloadIndexProduct()

})
</script>

<template>
  <ImageSlider/>

  <div v-if="product?.indexProductArray">
    <IndexCard/>
  </div>

  <ULoading v-else class="my-60"/>

  <IndexNewsCard/>
</template>

