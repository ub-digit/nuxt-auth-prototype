<script setup>
const { status, data, signIn } = useAuth();

const username = ref("");
const password = ref("");
const errorLogin = ref("");

const handleSignIn = async () => {
  const { error, url } = await signIn("credentials", {
    username: username.value,
    password: password.value,
    redirect: false,
  });
  if (error) {
    errorLogin.value = "Invalid credentials";
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    errorLogin.value = "";
    return navigateTo(url, { external: true });
  }
};
</script>

<template>
  <form class="space-y-3 md:space-y-4" @submit.prevent="handleSignIn()">
    <div v-if="errorLogin" class="text-red-500 font-bold">{{ errorLogin }}</div>
    <div>
      <label for="username" class="block mb-2 text-sm font-bold text-gray-900"
        >Library cardnumber</label
      >
      <input
        v-model="username"
        type="username"
        name="username"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder="Library cardnumber"
        required
      />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-bold text-gray-900"
        >Personal identity number
      </label>
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        required
      />
    </div>
    <div class="flex items-center justify-between"></div>
    <button
      type="submit"
      class="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Sign in
    </button>
  </form>
</template>
