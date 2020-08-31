import { createServer } from '../../server';
import { ClientType, createUserServiceClient } from '../../utils/test';
import { ServiceError } from 'grpc';
import { GetUserByLoginnameResponse, GetUserByLoginnameRequest } from './service_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

describe('#userServiceImpl', () => {
  let server: ReturnType<typeof createServer>;
  let userServiceClient: ReturnType<typeof createUserServiceClient>;
  beforeAll(() => {
    server = createServer();
    userServiceClient = createUserServiceClient(ClientType.STATIC);
  });
  afterAll((done) => {
    server.tryShutdown(done);
  });
  describe('#getUserByLoginname', () => {
    it('should get user detail by login name', (done) => {
      const req = new GetUserByLoginnameRequest();
      req.setLoginname('mrdulin');

      userServiceClient.getUserByLoginname(req, (err: ServiceError | null, res: GetUserByLoginnameResponse) => {
        if (err) {
          return done(err);
        }
        const expectAuthor = expect.objectContaining({
          loginname: expect.any(String),
          avatarUrl: expect.any(String),
        });
        expect(res.getSuccess()).toBeTruthy();
        let data = res.toObject().data;
        expect(data).toBeDefined();
        data = data!;
        expect(data).toEqual(
          expect.objectContaining({
            loginname: expect.any(String),
            avatarUrl: expect.any(String),
            githubusername: expect.any(String),
            createAt: expect.any(String),
            score: expect.any(Number),
          }),
        );
        if (data.recentTopicsList.length) {
          expect(data.recentTopicsList).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                author: expectAuthor,
                title: expect.any(String),
                lastReplyAt: expect.any(String),
              }),
            ]),
          );
        }
        if (data.recentRepliesList.length) {
          expect(data.recentRepliesList).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                author: expectAuthor,
                title: expect.any(String),
                lastReplyAt: expect.any(google_protobuf_timestamp_pb.Timestamp),
              }),
            ]),
          );
        }
        done();
      });
    });
  });
});
