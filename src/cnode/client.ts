import grpc from 'grpc';
import { topic } from './protos';

function createClient() {
  const topicService = new (topic as any).TopicService('localhost:3000', grpc.credentials.createInsecure());
  topicService.getTopics({}, (err, response) => {
    if (err) {
      return console.error(err);
    }
    console.log('GetTopicsResponse: ', response);
  });
}

createClient();
