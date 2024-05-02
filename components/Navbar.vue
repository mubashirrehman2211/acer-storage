<script setup>
import Magnify from 'nvd-u/icons/Magnify.vue'
import {useProductStore} from "~/stores/product.js";


const product = useProductStore()

const router = useRouter()

function goToSearchPage() {
  router.push('/Search')
}

function searchBtn() {
  product.toggleSearch = true
  if (product.searchValue) {
    router.push('/Search')
  }
}

</script>

<template>

  <div class="flex text-center justify-around shadow-sm h-[70px]">

    <NuxtLink class="logo mt-2 router-link-active" to="/">
      <img alt="Logo_img" src="/logo.svg">
    </NuxtLink>

    <div class="flex items-start text-start justify-start mt-2">

      <NavLink
          :options="product.productOptions"
          title="PRODUCTS"
          to="/products"
      />

      <NavLink
          :options="product.supportOptions"
          title="SUPPORT"
          to="/support"
      />

      <NavLink
          :options="product.aboutOptions"
          title="ABOUT US"
          to="/about"
      />

    </div>

    <div class="all-center">
      <div :class="{'search' : product.toggleSearch}" class="flex">
        <Transition name="input">
          <input
              v-if="product.toggleSearch"
              v-model="product.searchValue"
              class="w-60 mx-2 bg-[#666] outline-none text-sm p-2"
              placeholder="search"
              type="text"
          >
        </Transition>
        <Magnify :class="{'text-white': product.toggleSearch}" class="text-3xl text-gray-500"
                 @click="searchBtn()"
                 @dblclick="goToSearchPage()"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.search {
  border: 2px solid #666;
  border-radius: 15px;
  height: 30px;
  background-color: #666;
  color: #ffffff;
}


.input-enter-active {
  transition: all 0.5s linear;
}

.input-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.input-enter-from,
.input-leave-to {
  transform: translateX(100px);
  opacity: 0;

}
</style>
