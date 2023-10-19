<template>
  <div class="flex p-4 border-b mb-10">
    <div class="logo uppercase pr-4">Logo here</div>
    <Nav />
    <div class="ml-auto">
      <div v-if="status === 'authenticated'">
        Signed in as: <span class="font-bold">{{ data.user.name }}</span>
      </div>
      <div v-else>
        <NuxtLink v-if="route.path !== '/login'" to="/login">Log in</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { status, data, signOut } = useAuth();
const route = useRoute();
</script>

<style scoped></style>
