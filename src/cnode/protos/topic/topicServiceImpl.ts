import axios from 'axios';

export async function getTopics(call, callback) {
  try {
    const res = await axios.get('https://cnodejs.org/api/v1/topics', { params: { ...call.request } });
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(new Error('get topics error'));
  }
}

export async function getTopicById(call, callback) {
  try {
    const res = await axios.get(`https://cnodejs.org/api/v1/${call.request.id}`);
    callback(null, res.data);
  } catch (error) {
    console.log(error);
    callback(new Error('get topic by id error'));
  }
}
