export default {
  requests(state) {
    return state.requests
    // const coachId = rootGetters.userId;
    // return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};
