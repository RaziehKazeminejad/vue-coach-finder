<template>
  <div>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div class="row">
      <section>
        <base-card mode="flat">
          <div class="controls">
            <base-button mode="outline" @click="loadCoaches(true)">
              Refresh
            </base-button>
            <base-button link to="/auth?redirect=register" v-if="!isLoggesIn">
              Login to Register as Coach
            </base-button>
            <base-button
              v-if="isLoggesIn && !isCoach && !isLoading"
              link
              to="/register"
            >
              Register as a coach
            </base-button>
          </div>
          <section>
            <coach-filter @change-filter="setFilter"></coach-filter>
          </section>
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-else-if="hasCoaches">
            <coach-item
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :id="coach.id"
              :first-name="coach.firstName"
              :last-name="coach.lastName"
              :rate="coach.hourlyRate"
              :areas="coach.areas"
            ></coach-item>
          </ul>
          <h3 v-else>No coaches found.</h3>
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { CoachItem, BaseButton, CoachFilter },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    isLoggesIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 2.4rem;
  justify-content: center;
}
.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
}
@media only screen and (max-width: 600px) {
  ul {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
}
h3 {
  text-align: center;
  margin-top: 2rem;
}
#loading {
  margin-top: 4rem;
}
</style>