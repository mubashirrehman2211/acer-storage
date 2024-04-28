<script setup>
const product = useProductStore()
</script>

<template>
  <div class="news-container all-center flex-col mb-10">
    <header class="text-4xl font-semibold mb-20">News</header>

    <div class="all-center gap-x-10">

      <NewsCard
          :img-src="product.newsCard.img1"
          :news="product.newsCard.paraNo1"
          :title="product.newsCard.title1"
      />

      <NewsCard
          :img-src="product.newsCard.img2"
          :news="product.newsCard.paraNo2"
          :title="product.newsCard.title2"
      />

      <NewsCard
          :img-src="product.newsCard.img3"
          :news="product.newsCard.paraNo3"
          :title="product.newsCard.title3"
      />
    </div>

    <div>
      <IndexBtn
          name="NEWS ROOM"
          to="/support"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
