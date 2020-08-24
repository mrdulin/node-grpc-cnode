import { createTopicServiceClient, ClientType } from '../../utils/test';

const topicServiceClient = createTopicServiceClient(ClientType.STATIC);
topicServiceClient.getTopics({ limit: 1 }, (err, response) => {
  if (err) {
    return console.log(err);
  }
  console.log('response: ', response);
});
