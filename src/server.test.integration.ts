import health_messages from 'grpc-health-check/v1/health_pb';
import { createHealthCheckClient } from './utils/testUtil';

const ServingStatus = health_messages.HealthCheckResponse.ServingStatus;

describe('#health-check', () => {
  let healthClient: ReturnType<typeof createHealthCheckClient>;
  beforeAll(() => {
    healthClient = createHealthCheckClient();
  });
  it('should say an enabled service is SERVING', (done) => {
    const req = new health_messages.HealthCheckRequest();
    req.setService('');
    healthClient.check(req, (err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.getStatus()).toEqual(ServingStatus.SERVING);
      done();
    });
  });
  it('should say user.UserApi service is SERVING', (done) => {
    const req = new health_messages.HealthCheckRequest();
    req.setService('user.UserApi');
    healthClient.check(req, (err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.getStatus()).toEqual(ServingStatus.SERVING);
      done();
    });
  });
  it('should say topic.TopicApi service is SERVING', (done) => {
    const req = new health_messages.HealthCheckRequest();
    req.setService('topic.TopicApi');
    healthClient.check(req, (err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.getStatus()).toEqual(ServingStatus.SERVING);
      done();
    });
  });
});
