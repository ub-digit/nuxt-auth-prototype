<template>
  <section class="md:w-96">
    <div class="border pt-4 pb-8 px-8 rounded-sm">
      <h3 class="text-xl font-bold pb-4">Login</h3>
      <div class="">
        <LoginGithub />
        <p class="font-bold pt-5 text-center">- OR -</p>
        <LoginCredentials />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: providers } = await useFetch("/api/auth/providers");
</script>

<style scoped></style>
