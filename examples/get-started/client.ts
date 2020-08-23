import grpc from 'grpc';
import express from 'express';
import { UserProto } from './protos/user';

const app = express();
const port = 3001;
const client = new (UserProto as any).UserServiceDefinition('localhost:3000', grpc.credentials.createInsecure());

app.get('/user/:id', (req, res) => {
  client.findById({ id: req.params.id }, (err, response) => {
    if (err) {
      return console.error(err);
    }
    res.json(response);
  });
});
app.get('/users', (req, res) => {
  client.findAll({}, (err, response) => {
    if (err) {
      return console.error(err);
    }
    res.json(response);
  });
});

app.listen(port, () => {
  console.log(`RESTful API is ready at http://localhost:${port}`);
});
