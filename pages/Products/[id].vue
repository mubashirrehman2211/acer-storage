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

    <div id="overview">
      <OverView/>
    </div>

    <div id="specification">
      <ProductSpecification/>
    </div>

    <div id="download">
      <DownloadComponent/>
    </div>

    <div id="relatedProduct">
      <RelatedProduct/>
    </div>
  </div>

  <ULoading v-else class="my-60"/>
</template>

<style scoped>

</style>
