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

.nuxt-link {
  color: #888;
  margin: 4em !important;
  font-size: 1.2em;
}

.router-link-active {
  border-bottom: none !important;
}

.router-link-exact-active {
  font-weight: bolder;
  color: #000;
}

.dropdown-fade-enter-active {
  transition: all 0.3s ease-in;
}

.dropdown-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  transform: translateY(-45px);
  opacity: 0;
}
</style>
