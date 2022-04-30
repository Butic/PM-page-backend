import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Invite, InviteDocument } from './entities/invite.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Resolver(() => Invite)
export class InviteResolver {
  constructor(
    @InjectModel(Invite.name) private inviteModel: Model<InviteDocument>,
    private readonly inviteService: InviteService,
  ) {}
  @Mutation(() => Invite, { name: 'CreateInvitation' })
  async create(
    @Args('invitationData') createInviteDto: CreateInviteDto,
  ): Promise<Invite> {
    return await this.inviteService.create(createInviteDto);
  }
  @Query(() => Invite, { name: 'findInvitiationById' })
  async findOneById(@Args('id') id: string) {
    const response = await this.inviteService.findById(id);
    return response
      ? response.expiryDate > Date.now()
        ? response
        : new Error('We found your invitation, but its expired')
      : new Error('Current invitation does not exists');
  }
  //expected thant user will send request for receiveng data
  //and expiry date check will be done here b4 sending to user
  @Query(() => [Invite], { name: 'findAllInvitations' })
  async findAllInvitations() {
    return await this.inviteService.findAll();
  }
}
