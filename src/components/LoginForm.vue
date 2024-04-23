<template>
	<div>
		<h2>Login</h2>
		<form @submit.prevent="login">
			<input type="text" v-model="username" placeholder="Username" />
			<input type="password" v-model="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
	</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await fetch(
          'http://localhost:4000/api/auth/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          }
        )

        const data = await response.json()

        // Store JWT token securely (e.g., in local storage)
        localStorage.setItem('token', data.token)

        // Redirect to protected route or perform other actions
      } catch (error) {
        console.error('Login failed:', error)
        // Handle login error (e.g., display error message)
      }
    }
  }
}
</script>
