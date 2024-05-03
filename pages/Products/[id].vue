<script setup>
import ProductDetail from "~/components/ProductDetail.vue";
import OverView from "~/components/OverView.vue";
import DownloadComponent from "~/components/DownloadComponent.vue";
import RelatedProduct from "~/components/RelatedProduct.vue";

const product = useProductStore()

onMounted(() => {
  product.findProduct()
  product.filterProduct()
})
</script>

<template>

  <div v-if="product.p">
    <ProductDetail/>

    <OverView/>

    <ProductSpecification/>

    <DownloadComponent/>

    <RelatedProduct/>
  </div>

  <ULoading v-else class="my-60"/>
</template>

<style scoped>

</style>
