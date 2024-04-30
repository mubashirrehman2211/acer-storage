<script lang="ts" setup>

const product = useProductStore()

</script>

<template>
  <div class="grid grid-cols-3 my-20 gap-y-20 mx-52">
    <TransitionGroup name="list">
      <div v-for="p in product.resultedArray"
           :key="p.img" class="all-center flex-col w-[400px] h-[300px] hover:text-[#86d145] cursor-pointer">
        <div>
          <img :src="p.img" alt="" class="w-[70%] p-2 hover:scale-110 duration-200 m-auto">
        </div>
        <div>
          <h2 id="pTitle" class="text-xl px-2">{{ p.title }}</h2>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

</style>
