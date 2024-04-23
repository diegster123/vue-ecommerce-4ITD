<template>
    <div>
      <h1>PETPALS</h1>
      <button @click="redirectToLogin">Login</button>
    </div>
  </template>

<script>
export default {
  methods: {
    redirectToLogin () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

  <style>
  /* Add your styles here */
  </style>
