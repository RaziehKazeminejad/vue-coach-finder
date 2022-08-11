import mutation from './mutation';
import actions from './actions';

const requestsModules = {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutation,
  actions,
};
export default requestsModules;
