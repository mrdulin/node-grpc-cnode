import { ClientType, createUserServiceClient } from '../../utils/testUtil';
import { ServiceError } from 'grpc';
import { GetUserRequest, GetUserResponse } from './service_pb';
import { IUserApiClient } from './service_grpc_pb';

describe('#userServiceImpl', () => {
  let userServiceClient: IUserApiClient;
  beforeAll(() => {
    userServiceClient = createUserServiceClient(ClientType.STATIC);
  });
  describe('#getUserByLoginname', () => {
    it('should get user detail by login name', (done) => {
      const req = new GetUserRequest();
      req.setLoginname('mrdulin');

      userServiceClient.getUser(req, (err: ServiceError | null, res: GetUserResponse) => {
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
                lastReplyAt: {
                  seconds: expect.any(Number),
                  nanos: expect.any(Number),
                },
              }),
            ]),
          );
        }
        done();
      });
    });
  });
});
