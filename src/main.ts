import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { corsConfig } from 'config-example/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('service.port');

  app.use(cookieParser());
  app.enableCors(corsConfig);
  await app.listen(port);
}
bootstrap();
