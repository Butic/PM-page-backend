import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InviteSchema } from './entities/invite.entity';
import { InviteResolver } from './invite.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invite', schema: InviteSchema }]),
  ],
  controllers: [],
  providers: [InviteService, InviteResolver],
  exports: [InviteService],
})
export class InviteModule {}
