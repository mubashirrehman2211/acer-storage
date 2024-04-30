<script setup>
defineProps([
  'title',
  'to',
  'options',
  // 'condition',
  // 'open',
  // 'close',
])

let opened = ref(false)

function open() {
  opened.value = true
}

function close() {
  opened.value = false
}

</script>

<template>
  <div class="relative" @mouseleave="close" @mouseover="open">
    <h3>
      <NuxtLink :to="to" class="nuxt-link router-link-active">{{ title }}</NuxtLink>
    </h3>
    <Transition name="dropdown-fade">
      <div v-if="opened" class="bg-[#f5f5f5] text-[#555] mt-[1.7rem] rounded-b-lg">
        <ul v-for="n in options" class="">
          <li class="px-3 py-4 hover:font-semibold my-3 cursor-pointer">{{ n }}</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>


</style>
