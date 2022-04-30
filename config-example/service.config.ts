import { registerAs } from '@nestjs/config';
export default registerAs('service', () => ({
  serviceName: 'exceed-portal',
  port: process.env.http_port || '3007',
}));
