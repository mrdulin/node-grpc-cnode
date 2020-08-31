import { createTopicServiceClient, ClientType } from '../../utils/testUtil';
import { ListTopicsRequest, ListTopicsResponse, GetTopicRequest, GetTopicResponse } from './service_pb';
import { ITopicApiClient } from './service_grpc_pb';
import { ServiceError } from 'grpc';

describe('userServiceImpl', () => {
  let topicServiceClient: ITopicApiClient;
  beforeAll(() => {
    topicServiceClient = createTopicServiceClient(ClientType.STATIC);
  });
  describe('#getTopics', () => {
    it('should get topics', (done) => {
      const req = new ListTopicsRequest();
      req.setLimit(1);
      topicServiceClient.listTopics(req, (err: ServiceError | null, response: ListTopicsResponse) => {
        if (err) {
          return done(err);
        }
        expect(response.getSuccess()).toBeTruthy();
        expect(response.getDataList()).toHaveLength(1);
        expect(response.toObject().dataList).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              authorId: expect.any(String),
              tab: expect.any(Number),
              title: expect.any(String),
              content: expect.any(String),
              author: expect.objectContaining({
                loginname: expect.any(String),
                avatarUrl: expect.any(String),
              }),
              good: expect.any(Boolean),
              top: expect.any(Boolean),
              replyCount: expect.any(Number),
              visitCount: expect.any(Number),
              createAt: expect.any(String),
              lastReplyAt: expect.any(String),
            }),
          ]),
        );

        done();
      });
    });
  });

  describe('#getTopicById', () => {
    it('should get topic by id', (done) => {
      const req = new GetTopicRequest();
      req.setId('5433d5e4e737cbe96dcef312');
      topicServiceClient.getTopic(req, (err: ServiceError | null, res: GetTopicResponse) => {
        if (err) {
          return done(err);
        }
        expect(res.getSuccess()).toBeTruthy();
        expect(res.toObject().data).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            authorId: expect.any(String),
            tab: expect.any(Number),
            title: expect.any(String),
            content: expect.any(String),
            author: expect.objectContaining({
              loginname: expect.any(String),
              avatarUrl: expect.any(String),
            }),
            good: expect.any(Boolean),
            top: expect.any(Boolean),
            replyCount: expect.any(Number),
            visitCount: expect.any(Number),
            createAt: expect.any(String),
            lastReplyAt: expect.any(String),
          }),
        );
        done();
      });
    });
  });
});
