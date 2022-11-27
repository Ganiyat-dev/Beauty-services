import axios from "axios";
import _routes from "./service-routes";

const service = {
  setPageTitle: (component) => (document.title = `GlamUp - ${component}`),

  doLogin: async (postBody) => {
    const res = await axios.post(_routes.login, postBody);
    return res.data;
  },

  handleLoginError: (err, callback) => {
    if (err.response.status === 401) callback("Incorrect email or password");
  },

  doRegisterClient: async (postBody) => {
    const res = await axios.post(_routes.registerClient, postBody);
    return res.data;
  },

  doRegisterTrainer: async (postBody) => {
    const res = await axios.post(_routes.registerTrainer, postBody);
    return res.data;
  },

  handleRegisterError: (err, callback) => {
    callback("Email already in use");
  },
};

export default service;
