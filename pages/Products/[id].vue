<script setup>
import ProductDetail from "~/components/ProductDetail.vue";
import OverView from "~/components/OverView.vue";
import DownloadComponent from "~/components/DownloadComponent.vue";
import RelatedProduct from "~/components/RelatedProduct.vue";

const {id} = useRoute().params

</script>

<template>
  <ProductDetail/>

  <OverView/>

  <ProductSpecification/>

  <DownloadComponent/>

  <RelatedProduct/>
</template>

<style scoped>

</style>
