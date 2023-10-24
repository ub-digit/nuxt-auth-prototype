<template>
  <div>
    <h1>Home</h1>

    <p class="text-red-400" v-if="data.status === 'unauthenticated'">You will need to login to see secret data</p>


    <p v-if="data.status === 'authenticated'">
    <p class="text-blue-800">Secret data</p>
      <ul v-if="data.data">
      <li v-for="item in data.data" :key=item.id>
        {{ item.name }}
      </li>
      </ul>
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae
      itaque animi, necessitatibus error quis magni, culpa nulla id voluptates
      rerum maxime delectus perspiciatis iure laborum voluptatum incidunt atque
      suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur quae Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      In assumenda velit itaque recusandae nobis sequi, perspiciatis cum beatae
      dolores. Omnis veniam aut recusandae libero neque error dolore dicta id
      qui.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae
      itaque animi, necessitatibus error quis magni, culpa nulla id voluptates
      rerum maxime delectus perspiciatis iure laborum voluptatum incidunt atque
      suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur quae Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      In assumenda velit itaque recusandae nobis sequi, perspiciatis cum beatae
      dolores. Omnis veniam aut recusandae libero neque error dolore dicta id
      qui.
    </p>
  </div>
</template>

<script setup>
definePageMeta({ auth: false });
const { data } = useFetch("/api/protected");
</script>

<style scoped></style>
