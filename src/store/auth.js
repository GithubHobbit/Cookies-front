import axios from "axios";
import { regUser, loginUser } from "@/services/auth.service";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {},
};
const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  },
};
const actions = {
  async login({ commit }, userData) {
    try {
      commit("auth_request");
      const data = await loginUser(userData);
      console.log(data);
      const token = data.token;
      const user = data.user;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
      return data;
    } catch (err) {
      commit("auth_error", err);
      console.log(err.response);
      localStorage.removeItem("token");
      if (err.response.data.errors) {
        return Promise.reject(err.response.data.errors[0].msg);
      }
      return Promise.reject(err.response.data.message);
    }
  },
  async register({ commit }, userData) {
    try {
      commit("auth_request");
      const data = await regUser(userData);
      const token = data.token;
      const user = data.user;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
      return data;
    } catch (err) {
      commit("auth_error", err);
      localStorage.removeItem("token");
      if (err.response.data.errors) {
        return Promise.reject(err.response.data.errors[0].msg);
      }
      return Promise.reject(err.response.data.message);
    }
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  },
};
const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
};

export default {
  mutations,
  getters,
  actions,
  state,
};
