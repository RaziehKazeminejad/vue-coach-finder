export default {
  async addCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const response = await fetch(
      `https://vue-http-demo-a42a2-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to Fetch!');
      throw error
    }

    context.commit('addCoach', { ...coachData, id: userId });
  },

  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-a42a2-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      //error
    }

    const coaches = [];

    for (const key in responseData) {
      const coache = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coache);
    }
    context.commit('setCoaches', coaches);
  },
};
