<template>
  <base-card mode="shadow">
    <li>
      <h3>{{ fullName }}</h3>
      <base-price :rate="rate"></base-price>
      <div>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </div>
      <div class="actions">
        <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
        <base-button link :to="coachDetailsLink">View Details</base-button>
      </div>
    </li>
  </base-card>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: ['id', 'firstName', 'lastName', 'areas', 'rate'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
.card:hover {
  border-color: var(--purple-2);
  box-shadow: 1rem 1rem var(--purple-1);
}
li {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
h3 {
  font-size: 2.4rem;
  color: var(--purple-2);
  font-family: var(--font-display);
  font-weight: normal;
}
.actions {
  margin-top: auto;
  padding-top: 1.6rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
}
</style>