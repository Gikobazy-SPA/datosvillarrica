import * as types from "../mutationtypes";

const statuses = {
  ERROR: "error",
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning"
};

const state = {
  message: "",
  status: null
};

const mutations = {
  [types.WRITE_MESSAGE](state, payload) {
    state.message = payload;
  },
  [types.WRITE_STATUS](state, payload) {
    state.status = payload;
  }
};

const actions = {
  setError({ commit }, message) {
    commit(types.WRITE_MESSAGE, message);
    commit(types.WRITE_STATUS, statuses.ERROR);
  },
  setSuccess({ commit }, message) {
    commit(types.WRITE_MESSAGE, message);
    commit(types.WRITE_STATUS, statuses.SUCCESS);
  },
  setInfo({ commit }, message) {
    commit(types.WRITE_MESSAGE, message);
    commit(types.WRITE_STATUS, statuses.INFO);
  },
  clearMessage({ commit }) {
    commit(types.WRITE_MESSAGE, "");
    commit(types.WRITE_STATUS, statuses.INFO);
  }
};

const getters = {
  getMessage(state) {
    return state.message;
  },
  getStatus(state) {
    return state.status;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
