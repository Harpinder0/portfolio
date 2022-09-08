import { API_URL } from '../constant/constant';
import {
//   apiPost,
  apiGet,
//   apiPut,
//   apiDelete,
} from '../utils/apisMethod';

// github apis
export const github_User_Info = () => { return apiGet(`${API_URL}/users/harpinder0`)}