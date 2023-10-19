<template>
  <div>
    <ul class="flex justify-center">
      <li class="px-4"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="px-4">
        <NuxtLink to="/public">Public</NuxtLink>
      </li>
      <li v-if="isAuthorized" class="px-4">
        <NuxtLink to="/protected">Protected</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { status } = useAuth();

const isAuthorized = computed(() => {
  return status.value === "authenticated";
});
</script>

<style lang="scss" scoped></style>
