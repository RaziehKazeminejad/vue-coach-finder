<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
	background-color: #ccc;
	color: #252525;
	border-radius: 100rem;
	padding: 0.5em 1.2em;
	display: inline-block;
	margin-right: 0.5rem;
	font-size: 12px;
}


.frontend {
  background-color: var(--purple-3);
  color: white;
}

.backend {
  background-color: var(--purple-2);
  color: white;
}

.career {
  background-color: var(--purple-4);
  color: white;
}
</style>