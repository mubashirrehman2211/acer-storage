<script setup>
import FooterLink from "~/components/FooterLink.vue";

const product = useProductStore()
</script>

<template>
  <div class="flex justify-around bg-[#575757] text-gray-100">

    <div class="flex gap-20 my-10">
      <FooterLink
          :options="product.productOptions"
          title="PRODUCTS"
      />

      <FooterLink
          :options="product.supportOptions"
          title="SUPPORT"
      />

      <FooterLink
          :options="product.aboutOptions"
          title="ABOUT US"
      />
    </div>

    <div class="sign-up mt-14">
      <h2 class="text-lg">Access our news, exclusive deals</h2>
      <div class="mt-5 all-center border-[1px] border-[#454545] rounded bg-[#454545] w-[300px] h-[50px]">
        <input class="border-none outline-none bg-[#454545] text-sm ml-1" placeholder="Your email address"
               type="text">
        <button
            class="border-2 border-[#202020] h-full w-[45%] bg-[#202020] hover:bg-[#4f4e4e] hover:border-[#4f4e4e] duration-500">
          SIGN ME UP
        </button>
      </div>
    </div>
  </div>

  <div class="bg-[#202020] border-2 border-[#202020]">
    <div class="flex text-start ml-60 my-4 text-[#666]">
      <span class="hover:text-[#fff] duration-500 cursor-pointer">Privacy Policy</span>
      <span class="hover:text-[#fff] duration-500 ml-8 cursor-pointer">Contact Us</span>
    </div>
    <hr class="w-[75%] m-auto border-[#666]">

    <div class="flex flex-col text-start ml-60 my-3">
      <ul class="text-[#666]">
        <li class="text-sm">Copyright © 2024 BIWIN Storage. All Rights Reserved.</li>
        <li class="text-sm">The Acer trademarks are licensed to BIWIN Semiconductor (HK) Co, Ltd. by Acer
          Incorporated.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
