<template>
  <div>
    <h1>About</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  layout: "admin",
};
</script>