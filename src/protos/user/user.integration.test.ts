import { createServer } from '../../server';
import { ClientType, createUserServiceClient } from '../../utils/test';

describe('#userServiceImpl', () => {
  let server: ReturnType<typeof createServer>;
  let userServiceClient: ReturnType<typeof createUserServiceClient>;
  beforeAll(() => {
    server = createServer();
    userServiceClient = createUserServiceClient(ClientType.DYNAMIC);
  });
  afterAll((done) => {
    server.tryShutdown(done);
  });
  describe('#getUserByLoginname', () => {
    it('should get user detail by login name', (done) => {
      userServiceClient.getUserByLoginname({ loginname: 'mrdulin' }, (err, response) => {
        if (err) {
          return done(err);
        }
        console.log('getUserByLoginname:', response);
        done();
      });
    });
  });
});
