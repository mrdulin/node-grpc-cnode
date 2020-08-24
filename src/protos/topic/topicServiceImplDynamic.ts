import axios from 'axios';
import { config } from '../../config';

const ErrGetTopics = new Error('topicServiceImpl: get topics');
const ErrGetTopicById = new Error('topicServiceImpl: get topic by id');

export async function getTopics(call, callback) {
  try {
    const res = await axios.get(`${config.CNODE_API_URL}/topics`, { params: { ...call.request } });
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(ErrGetTopics);
  }
}

export async function getTopicById(call, callback) {
  try {
    const res = await axios.get(`${config.CNODE_API_URL}/topic/${call.request.id}`);
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(ErrGetTopicById);
  }
}
