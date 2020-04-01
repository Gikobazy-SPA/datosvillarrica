import * as types from "@/store/mutationtypes";
import auth from "../../services/auth";

const state = {
  user: "",
  signed: false
};

const mutations = {
  [types.SET_SIGNED](state, payload) {
    state.signed = payload;
  },
  [types.SET_USER](state, payload) {
    state.user = payload;
  },
  [types.DELETE_USER](state) {
    state.user = null;
  }
};

const actions = {
  authorizeUser({ commit }, payload) {
    auth
      .userAuth(payload.email, payload.password)
      .then(currentUser => {
        commit(types.SET_USER, currentUser);
        commit(types.SET_SIGNED, true);
      })
      .catch(error => {
        commit(types.WRITE_STATUS, error.message);
        commit(types.SET_SIGNED, false);
        commit(types.DELETE_USER);
      });
  },
  authorizeWithGoogle({ commit }) {
    auth
      .googleAuth()
      .then(currentUser => {
        commit(types.SET_USER, currentUser);
        commit(types.SET_SIGNED, true);
      })
      .catch(error => {
        commit(types.WRITE_STATUS, error.message);
        commit(types.SET_SIGNED, false);
        commit(types.DELETE_USER);
      });
  },
  signUp({ commit }, payload) {
    auth
      .signUp(payload.email, payload.password)
      .then(currentUser => {
        commit(types.SET_USER, currentUser);
        commit(types.SET_SIGNED, false);
      })
      .catch(error => {
        commit(types.WRITE_STATUS, error.message);
        commit(types.SET_SIGNED, false);
        commit(types.DELETE_USER);
      });
  }
};

const getters = {
  isAuthorized(state) {
    return state.signed;
  },
  getUser(state) {
    return state.user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
