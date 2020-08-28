import { createServer } from '../../server';
import { createTopicServiceClient, ClientType } from '../../utils/test';
import { GetTopicsRequest, GetTopicsResponse } from './service_pb';
import { ITopicServiceClient } from './service_grpc_pb';
import { ServiceError } from 'grpc';

describe('userServiceImpl', () => {
  let server: ReturnType<typeof createServer>;
  let topicServiceClient: ITopicServiceClient;
  beforeAll(() => {
    server = createServer();
    topicServiceClient = createTopicServiceClient(ClientType.STATIC);
  });
  afterAll((done) => {
    server.tryShutdown(done);
  });
  describe('#getTopics', () => {
    it('should get topics', (done) => {
      const req = new GetTopicsRequest();
      req.setLimit(1);
      topicServiceClient.getTopics(req, (err: ServiceError | null, response: GetTopicsResponse) => {
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
    it('should get topic by id', () => {});
  });
});
