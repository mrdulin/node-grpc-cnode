import { ITopicServiceServer } from './service_grpc_pb';
import { GetTopicsRequest, GetTopicsResponse, GetTopicByIdRequest, GetTopicByIdResponse } from './service_pb';
import { ServerUnaryCall, sendUnaryData, ServiceError, status, Metadata } from 'grpc';
import axios from 'axios';
import { config } from '../../config';
import { Tab, Mdrender, Topic } from './topic_pb';
import { getEnumKeyByEnumValue } from '../../utils/enum';
import { UserBase } from '../share/user_pb';

export class TopicServiceImpl implements ITopicServiceServer {
  public async getTopics(call: ServerUnaryCall<GetTopicsRequest>, callback: sendUnaryData<GetTopicsResponse>) {
    const obj = call.request.toObject();
    const url = `${config.CNODE_API_URL}/topics`;
    const params = {
      page: obj.page || obj.page + 1,
      tab: (getEnumKeyByEnumValue(Tab, obj.tab) || '').toLowerCase(),
      mdrender: (getEnumKeyByEnumValue(Mdrender, obj.mdrender) || 'true').toLowerCase(),
      limit: obj.limit,
    };
    try {
      const res = await axios.get(url, { params });
      const data = res.data;
      // console.log(data);
      const topicsResponse = new GetTopicsResponse();
      data.data.forEach((po, i) => {
        const topic = new Topic();
        topic.setId(po.id);
        topic.setAuthorId(po.author_id);
        topic.setTab(Tab[po.tab.toUpperCase() as keyof typeof Tab]);
        topic.setContent(po.content);
        topic.setTitle(po.title);
        topic.setLastReplyAt(po.last_reply_at);
        topic.setGood(po.good);
        topic.setTop(po.top);
        topic.setReplyCount(po.reply_count);
        topic.setVisitCount(po.visit_count);
        topic.setCreateAt(po.create_at);
        const author = new UserBase();
        author.setLoginname(po.author.loginname);
        author.setAvatarUrl(po.avatar_url);
        topic.setAuthor(author);
        topicsResponse.addData(topic, i);
      });
      topicsResponse.setSuccess(data.success);
      callback(null, topicsResponse);
    } catch (error) {
      console.log(error);
      const metadata = new Metadata({ idempotentRequest: true });
      metadata.set('params', JSON.stringify(params));
      metadata.set('url', url);
      const ErrGetTopics: ServiceError = { code: status.INTERNAL, name: 'getTopicsError', message: 'call CNode API failed', metadata };
      callback(ErrGetTopics, null);
    }
  }
  public async getTopicById(call: ServerUnaryCall<GetTopicByIdRequest>, callback: sendUnaryData<GetTopicByIdResponse>) {
    // try {
    //   const res = await axios.get(`${config.CNODE_API_URL}/topic/${call.request.id}`);
    //   callback(null, res.data);
    // } catch (error) {
    //   console.log(error);
    //   callback(ErrGetTopicById, null);
    // }
  }
}
