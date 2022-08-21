<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  watch: {
    didAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

:root {
  --purple-1: #fbb7c0;
  --purple-2: #b6244f;
  --purple-3: #771834;
  --purple-4: #2c2843;
  --pink-1: #f8a4af;
  --pink-2: #ece1fc;
  --gray-1: #504746;
  --gray-2: #bfada3;
  --white-1: #fff;
  --white-2: #feecee;
  --font-primary: 'Noto Sans', sans-serif;
  --font-display: 'Fredoka One', cursive;
  --max-width: 144rem;
}

* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-family: var(--font-primary);
  font-size: 62.5%;
  background: var(--white-2);
  overflow-y: overlay;
}
body {
  font-size: 1.6rem;
  color: var(--purple-4);
}
p {
  color: var(--purple-4);
}
section {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
ul {
  list-style: none;
}
button {
  font: inherit;
}
.row {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.6rem;
}
a {
  text-decoration: none;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>