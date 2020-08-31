import axios from 'axios';
import { Metadata, sendUnaryData, ServerUnaryCall, ServiceError, status } from 'grpc';

import { config } from '../../config';
import { getEnumKeyByEnumValue } from '../../utils/enum';
import { UserBase } from '../share/user_pb';

import { ITopicServiceServer } from './service_grpc_pb';
import { GetTopicByIdRequest, GetTopicByIdResponse, GetTopicsRequest, GetTopicsResponse } from './service_pb';
import { Mdrender, Tab, Topic } from './topic_pb';

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
      const ErrGetTopics: ServiceError = {
        code: status.INTERNAL,
        name: 'getTopicsError',
        message: 'call CNode API failed',
        metadata,
      };
      callback(ErrGetTopics, null);
    }
  }
  public async getTopicById(call: ServerUnaryCall<GetTopicByIdRequest>, callback: sendUnaryData<GetTopicByIdResponse>) {
    const id = call.request.getId();
    const url = `${config.CNODE_API_URL}/topic/${id}`;
    try {
      const res = await axios.get(url);
      const data = res.data.data;
      const topicByIdResponse = new GetTopicByIdResponse();
      topicByIdResponse.setSuccess(res.data.success);
      const topic = new Topic();
      topic.setId(data.id);
      topic.setAuthorId(data.author_id);
      topic.setContent(data.content);
      topic.setTab(Tab[data.tab.toUpperCase() as keyof typeof Tab]);
      topic.setTitle(data.title);
      topic.setLastReplyAt(data.last_reply_at);
      topic.setGood(data.good);
      topic.setTop(data.top);
      topic.setReplyCount(data.reply_count);
      topic.setVisitCount(data.visit_count);
      const author = new UserBase();
      author.setAvatarUrl(data.avatar_url);
      author.setLoginname(data.loginname);
      topic.setAuthor(author);
      topicByIdResponse.setData(topic);
      callback(null, topicByIdResponse);
    } catch (error) {
      console.log(error);
      const metadata = new Metadata();
      metadata.set('id', id);
      metadata.set('url', url);
      const ErrGetTopicById: ServiceError = {
        code: status.INTERNAL,
        name: 'getTopicByIdError',
        message: 'call CNode API failed',
        metadata,
      };
      callback(ErrGetTopicById, null);
    }
  }
}
