<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <main class="min-h-screen flex flex-column">

    <Navbar/>

    <div class="content flex-grow-1">
      <slot/>
    </div>

    <Footer/>
  </main>
</template>
