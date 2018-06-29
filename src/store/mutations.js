import { SET_OAUTHTOKEN} from './mutation-types';
const mutations = {
  [SET_OAUTHTOKEN](state, oauth_token) {
    state.oauth_token = oauth_token;
  }
};
export default mutations;
