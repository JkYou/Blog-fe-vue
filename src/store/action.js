import { oauth_token } from "./mutation-types";
const action = {
    SET_OAUTHTOKEN({ commit },oauth_token){
      commit("SET_OAUTHTOKEN",oauth_token);
      return oauth_token;
     },
    SET_ARTCONTENT({ commit },art_content){
      commit("SET_ARTCONTENT",art_content);
      return art_content;
    }  
};
export default action