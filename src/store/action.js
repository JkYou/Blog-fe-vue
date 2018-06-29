import { oauth_token } from "./mutation-types";
const action = {
    SET_OAUTHTOKEN({ commit },oauth_token){
      commit("SET_OAUTHTOKEN",oauth_token);
      return oauth_token;
  }
};
export default action