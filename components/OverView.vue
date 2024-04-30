<script lang="ts" setup>

import OverViewCard from "~/components/OverViewCard.vue"
import {useOverViewStore} from "~/stores/OverViewStore";

const overview = useOverViewStore()
</script>

<template>
  <OverViewCard
      :desc="overview.overViewDetail.desc6"
      :imgSrc="overview.overViewDetail.img6"
      :title="overview.overViewDetail.title6"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc7"
      :imgSrc="overview.overViewDetail.img7"
      :title="overview.overViewDetail.title7"
      class="flex-row-reverse"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc8"
      :imgSrc="overview.overViewDetail.img8"
      :title="overview.overViewDetail.title8"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc9"
      :imgSrc="overview.overViewDetail.img9"
      :title="overview.overViewDetail.title9"
      class="flex-row-reverse"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc10"
      :imgSrc="overview.overViewDetail.img10"
      :title="overview.overViewDetail.title10"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc11"
      :imgSrc="overview.overViewDetail.img11"
      :title="overview.overViewDetail.title11"
      class="flex-row-reverse"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc12"
      :imgSrc="overview.overViewDetail.img12"
      :title="overview.overViewDetail.title12"
  />

  <OverViewCard
      :desc="overview.overViewDetail.desc13"
      :imgSrc="overview.overViewDetail.img13"
      :title="overview.overViewDetail.title13"
      class="flex-row-reverse"
  />

</template>

<style scoped>

</style>
