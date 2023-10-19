<template>
  <footer class="flex flex-col p-4 border-t justify-center text-center">
    <h4>Nuxt-auth-prototype</h4>
    <p class="text-sm">
      A prototype for Nuxt authentication <br />
      nuxt-auth: 0.6.0-rc.0
    </p>
    <button
      v-if="status === 'authenticated'"
      class="text-sm"
      @click="handleSignOut()"
    >
      Log out
    </button>
  </footer>
</template>

<script setup>
const { status, signOut } = useAuth();

const handleSignOut = () => {
  // had to add this callbackUrl to get it to work see https://github.com/sidebase/nuxt-auth/issues/311
  signOut({ callbackUrl: "/" });
};
</script>

<style scoped></style>
