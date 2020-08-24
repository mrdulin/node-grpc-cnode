import axios from 'axios';
import { config } from '../../config';

const ErrGetUserByLoginname = new Error('userServiceImpl: get user by loginname');
const ErrValidateAccessToken = new Error('userServiceImpl: validate access token');

export async function getUserByLoginname(call, callback) {
  try {
    const url = `${config.CNODE_API_URL}/user/${call.request.loginname}`;
    const res = await axios.get(url);
    res.data.data.recent_replies = res.data.data.recent_replies.map((r) => {
      r.last_reply_at = new Date(r.last_reply_at);
      return r;
    });
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(ErrGetUserByLoginname);
  }
}

export async function validateAccessToken(call, callback) {
  try {
    const res = await axios.post(`${config.CNODE_API_URL}/accesstoken`, {
      data: { accesstoken: call.request.accesstoken },
    });
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(ErrValidateAccessToken);
  }
}
