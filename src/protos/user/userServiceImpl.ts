import { IUserServiceServer } from './service_grpc_pb';
import { ServerUnaryCall, sendUnaryData, ServiceError, status, Metadata } from 'grpc';
import {
  GetUserByLoginnameRequest,
  GetUserByLoginnameResponse,
  ValidateAccessTokenRequest,
  ValidateAccessTokenResponse,
} from './service_pb';
import { config } from '../../config';
import axios from 'axios';
import { UserDetail } from './user_pb';
import { RecentReply } from '../reply/reply_pb';
import { UserBase } from '../share/user_pb';
import { TopicBase } from '../share/topic_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class UserServiceImpl implements IUserServiceServer {
  public async getUserByLoginname(call: ServerUnaryCall<GetUserByLoginnameRequest>, callback: sendUnaryData<GetUserByLoginnameResponse>) {
    const loginname = call.request.getLoginname();
    const url = `${config.CNODE_API_URL}/user/${loginname}`;
    try {
      const res = await axios.get(url);
      const data = res.data.data;
      const grcpResponse = new GetUserByLoginnameResponse();
      grcpResponse.setSuccess(res.data.success);
      const user = new UserDetail();
      user.setAvatarUrl(data.avatar_url);
      user.setLoginname(data.loginname);
      user.setGithubusername(data.githubUsername);
      user.setCreateAt(data.create_at);
      user.setScore(data.score);
      const recentReplies = data.recent_replies.map((po) => {
        const reply = new RecentReply();
        reply.setId(po.id);
        reply.setTitle(po.title);
        const lastReplyAt = new google_protobuf_timestamp_pb.Timestamp();
        lastReplyAt.fromDate(new Date(po.last_reply_at));
        reply.setLastReplyAt(lastReplyAt);
        const author = new UserBase();
        author.setLoginname(po.author.loginname);
        author.setAvatarUrl(po.author.avatar_url);
        reply.setAuthor(author);
        return reply;
      });
      const recentTopics = data.recent_topics.map((po) => {
        const topic = new TopicBase();
        topic.setId(po.id);
        topic.setTitle(po.title);
        topic.setLastReplyAt(po.last_reply_at);
        const author = new UserBase();
        author.setLoginname(po.author.loginname);
        author.setAvatarUrl(po.author.avatar_url);
        topic.setAuthor(author);
        return topic;
      });
      user.setRecentRepliesList(recentReplies);
      user.setRecentTopicsList(recentTopics);
      grcpResponse.setData(user);
      callback(null, grcpResponse);
    } catch (error) {
      console.error(error);
      const metadata = new Metadata();
      metadata.set('url', url);
      const ErrGetUserByLoginname: ServiceError = {
        code: status.INTERNAL,
        name: 'getUserByLoginnameError',
        message: 'call CNode API failed',
        metadata,
      };
      callback(ErrGetUserByLoginname, null);
    }
  }
  public async validateAccessToken(
    call: ServerUnaryCall<ValidateAccessTokenRequest>,
    callback: sendUnaryData<ValidateAccessTokenResponse>,
  ) {}
}
