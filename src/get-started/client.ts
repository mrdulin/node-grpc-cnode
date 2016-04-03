import grpc from 'grpc';

import { UserProto } from './protos/user';

function createClient() {
  const client = new (UserProto as any).UserServiceDefinition('localhost:3000', grpc.credentials.createInsecure());

  client.findById({ user_id: 666 }, (err, response) => {
    if (err) {
      return console.error(err);
    }
    console.log('user: ', response);
  });
}

createClient();
