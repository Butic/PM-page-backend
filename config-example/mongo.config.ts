import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  url:
    process.env.mongo_url ||
    'mongodb+srv://User:User@todo-list.xof4m.mongodb.net/users?retryWrites=true&w=majority',
}));
