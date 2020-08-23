import axios from 'axios';
import { config } from '../../config';

const ErrGetUserByLoginname = new Error('userServiceImpl: get user by loginname');
const ErrValidateAccessToken = new Error('userServiceImpl: validate access token');

export async function getUserByLoginname(call, callback) {
  try {
    const res = await axios.get(`${config.CNODE_API_URL}/user/${call.request.loginname}`);
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
