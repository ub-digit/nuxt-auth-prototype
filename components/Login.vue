<template>
  <section>
    <div class="border pt-4 pb-8 px-8 rounded-sm">
      <h3 class="text-xl font-bold pb-4">Login</h3>

      <div class="flex">
        <ProviderLogin
          v-for="provider in providers"
          :key="provider.id"
          :provider-name="provider.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: providers } = await useFetch("/api/auth/providers");
</script>

<style scoped></style>
