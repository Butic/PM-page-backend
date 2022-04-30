import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { InviteModule } from './invite/invite.module';
import serviceConfig from '../config-example/service.config';
import mongoConfig from '../config-example/mongo.config';
import { LoginController } from './auth/login.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongoConfig, serviceConfig],
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    MongooseModule.forRoot(process.env.mongo_url),
    AuthModule,
    UsersModule,
    InviteModule,
    ReportsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      include: [UsersModule, InviteModule, ReportsModule],
    }),
  ],
  controllers: [LoginController],
  providers: [],
})
export class AppModule {}
