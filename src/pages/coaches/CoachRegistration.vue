<template>
  <section class="row">
    <base-card mode="shadow" color="color">
      <h2>Register as coach</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/addCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1.6rem;
  color: var(--purple-2);
}
section {
  margin-top: 3.2rem;
}
</style>