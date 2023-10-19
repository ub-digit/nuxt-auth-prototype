<template>
  <Login />
</template>

<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/protected",
  },
});
</script>

<style scoped></style>
