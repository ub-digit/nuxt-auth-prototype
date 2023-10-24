<template>
  <div>
    <button
      class="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      @click="signIn('github')"
    >
      <!-- <GithubIcon class="mr-4 h-6 w-6" /> -->
      Log in using Github
    </button>
  </div>
</template>

<script setup>
const { signIn } = useAuth();
</script>

<style lang="scss" scoped></style>
