import { createServer } from '../../server';
import { createTopicServiceClient, ClientType } from '../../utils/test';

describe('userServiceImpl', () => {
  let server: ReturnType<typeof createServer>;
  let topicServiceClient: ReturnType<typeof createTopicServiceClient>;
  beforeAll(() => {
    server = createServer();
    topicServiceClient = createTopicServiceClient(ClientType.STATIC);
  });
  afterAll((done) => {
    server.tryShutdown(done);
  });
  describe('#getTopics', () => {
    it('should get topics', (done) => {
      topicServiceClient.getTopics({ limit: 1 }, (err, response) => {
        if (err) {
          return done(err);
        }
        expect(response.data).toHaveLength(1);
        expect(response).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                author_id: expect.any(String),
                tab: expect.any(String),
                title: expect.any(String),
                content: expect.any(String),
                author: expect.any(Object),
                good: expect.any(Boolean),
                top: expect.any(Boolean),
                reply_count: expect.any(Number),
                visit_count: expect.any(Number),
                create_at: expect.any(String),
                last_reply_at: expect.any(String),
              }),
            ]),
            success: true,
          }),
        );
        done();
      });
    });
  });

  describe('#getTopicById', () => {
    it('should get topic by id', () => {});
  });
});
