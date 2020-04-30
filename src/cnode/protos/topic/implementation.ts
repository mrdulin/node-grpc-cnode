export function getTopics(call, callback) {
  console.log('getTopics request:', call.request);
  callback(null, { success: false, datas: [] });
}
