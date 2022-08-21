<template>
  <div class="row">
    <header>
      <nav>
        <h1>
          <router-link to="/" id="brand-title">Find a Coach</router-link>
        </h1>
        <ul>
          <li><base-button link to="/coaches">All Coaches</base-button></li>
          <li v-if="isLoggedIn">
            <base-button link to="/requests">Requests</base-button>
          </li>
          <li v-else>
            <base-button link to="/auth">Login</base-button>
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="logout">Logout</base-button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
header {
  color: var(--white-2);
  max-width: var(--max-width);
  margin-top: 1.2rem;
}
header nav {
  background: var(--purple-2);
  border-radius: 2rem;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-family: var(--font-display);
  font-size: 2rem;
}
#brand-title {
  color: var(--white-2);
  font-weight: normal;
  padding: 1rem;
}
a:active,
a:hover {
  color: var(--pink-1);
  background-color: var(--purple-3);
  border-color: var(--purple-3);
}
a.router-link-active {
  color: var(--pink-1);
  background-color: var(--purple-3);
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  color: inherit;
  background: none;
}
header ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}
@media only screen and (max-width: 600px) {
  header a,
  logout-btn {
    padding: 0.5em;
    font-size: 0.9em;
  }
  li {
    margin: 0 0.2rem;
  }
}
</style>