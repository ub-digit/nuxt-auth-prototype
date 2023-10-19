<template>
  <button
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    @click="signIn(providerName?.toLocaleLowerCase())"
  >
    <!-- <GithubIcon class="mr-4 h-6 w-6" /> -->
    Log in using {{ providerName }}
  </button>
</template>

<script setup>
defineProps({
  providerName: String,
});
const { signIn } = useAuth();
</script>
