<script lang="ts" setup>
const product = useProductStore()
</script>

<template>
  <div class="grid grid-cols-3 my-20 gap-y-20 mx-52">


    <BaseProduct
        :imgSrc="product.baseProducts.img1"
        :title="product.baseProducts.title1"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img2"
        :title="product.baseProducts.title2"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img3"
        :title="product.baseProducts.title3"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img4"
        :title="product.baseProducts.title4"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img5"
        :title="product.baseProducts.title5"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img6"
        :title="product.baseProducts.title6"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img7"
        :title="product.baseProducts.title7"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img8"
        :title="product.baseProducts.title8"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img9"
        :title="product.baseProducts.title9"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img10"
        :title="product.baseProducts.title10"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img11"
        :title="product.baseProducts.title11"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img12"
        :title="product.baseProducts.title12"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img13"
        :title="product.baseProducts.title13"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img14"
        :title="product.baseProducts.title14"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img15"
        :title="product.baseProducts.title15"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img16"
        :title="product.baseProducts.title16"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img17"
        :title="product.baseProducts.title17"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img18"
        :title="product.baseProducts.title18"
    />

    <BaseProduct
        :imgSrc="product.baseProducts.img19"
        :title="product.baseProducts.title19"
    />
  </div>
</template>

<style scoped>

</style>
