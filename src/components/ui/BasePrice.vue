<template>
  <h4>
    <span class="price">{{ rate }}</span>
    <span class="per">/hour</span>
  </h4>
</template>

<script>
export default {
  props: ['rate'],
};
</script>

<style scoped>
h4 {
  display: flex;
  align-items: center;
}

h4 .price {
  font-size: 4rem;
}

h4 .per {
  align-self: flex-start;
  font-size: 1.4rem;
  margin-left: 0.4rem;
  margin-top: 0.8rem;
  color: var(--purple-3);
  font-family: var(--font-display);
  font-weight: normal;
}
</style>