<script setup>
import IndexCard from "~/components/IndexCard.vue";

const product = useProductStore()

</script>

<template>
  <div class="product-container all-center flex-col">
    <header class="text-4xl font-semibold my-20">Products</header>
    <div class="grid grid-cols-3 mt-10 gap-y-48 mx-52">
      <IndexCard
          :img-src="product.indexCard.img1"
          :list="product.indexCard.listNo1"
          :title="product.indexCard.title1"
      />

      <IndexCard
          :img-src="product.indexCard.img2"
          :list="product.indexCard.listNo2"
          :title="product.indexCard.title2"
      />

      <IndexCard
          :img-src="product.indexCard.img3"
          :list="product.indexCard.listNo3"
          :title="product.indexCard.title3"
      />

      <IndexCard
          :img-src="product.indexCard.img4"
          :list="product.indexCard.listNo4"
          :title="product.indexCard.title4"
      />

      <IndexCard
          :img-src="product.indexCard.img5"
          :list="product.indexCard.listNo5"
          :title="product.indexCard.title5"
      />

      <IndexCard
          :img-src="product.indexCard.img6"
          :list="product.indexCard.listNo6"
          :title="product.indexCard.title6"
      />
    </div>

    <div>
      <IndexBtn
          name="EXPLORE PRODUCTS"
          to="/products/products"
      />
    </div>
  </div>
</template>

<style scoped>


</style>
