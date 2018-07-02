import { SET_OAUTHTOKEN, SET_ARTCONTENT} from './mutation-types';
const mutations = {
  [SET_OAUTHTOKEN](state, oauth_token) {
    state.oauth_token = oauth_token;
  },
  [SET_ARTCONTENT](state,content) {
    state.art_content=content;
  }
};
export default mutations;
