<script setup>
import SupportCard from "~/components/SupportCard.vue";
import Email from "nvd-u/icons/Email.vue";
import Phone from "nvd-u/icons/Phone.vue";
</script>

<template>
  <div class="bg-img flex flex-col w-screen h-[138vh]">
    <h1 class="all-center text-4xl font-semibold my-10 text-black">CUSTOMER SUPPORT</h1>

    <div class="grid grid-cols-4 gap-2 m-5">
      <SupportCard title="USA">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +1-866-351-8791
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: Storage.SupportUS@acer.com
        </p>
      </SupportCard>

      <SupportCard title="Europe">
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: Support.EU@acerstorage.com
        </p>
      </SupportCard>

      <SupportCard title="India">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +91-011-4089-0070
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: fortunerma@fortune-it.com
        </p>
      </SupportCard>

      <SupportCard title="China">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +86-400-770-1668
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: Storage.SupportCN@acer.com
        </p>
      </SupportCard>

      <SupportCard title="Taiwan">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +886-02-2792-8788
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: zt_service@zenitron.com.tw
        </p>
      </SupportCard>

      <SupportCard title="Korea">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +82-070-4917-8889 (DRAM)
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: service@seolin.co.kr
        </p>
      </SupportCard>

      <SupportCard title="Vietnam">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +84-283-838-9941
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: support.hcm@eascs.com.vn
        </p>
      </SupportCard>

      <SupportCard title="Thailand">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +66-2491-4564
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: marcom@welltechgroup.co.th
        </p>
      </SupportCard>

      <SupportCard title="Indonesia">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +62-817-1777-7008
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: service@asiaglobalsuksesindo.co.in
        </p>
      </SupportCard>

      <SupportCard title="UAE">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +971-4-8101002-800-732
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: rma@sdcit.com
        </p>
      </SupportCard>

      <SupportCard title="Ukraine">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +380-044-501-25-79 (ext 159)
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: warranty@brain.ua
        </p>
      </SupportCard>

      <SupportCard title="Tunisia">
        <p class="flex gap-2">
          <Phone class="mt-0.5"/>
          Tel: +21-632-406-606
        </p>
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: contact@tunisianet.com.tn
        </p>
      </SupportCard>

      <SupportCard title="All other territories">
        <p class="flex gap-2">
          <Email class="mt-0.5"/>
          Email: CS@acerstorage.com
        </p>
      </SupportCard>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  background: url("/assets/image/support-bg-img.jpg");
}
</style>
