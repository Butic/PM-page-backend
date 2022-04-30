import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { Invite, InviteDocument } from './entities/invite.entity';
import { Model } from 'mongoose';
export declare class InviteResolver {
    private inviteModel;
    private readonly inviteService;
    constructor(inviteModel: Model<InviteDocument>, inviteService: InviteService);
    create(createInviteDto: CreateInviteDto): Promise<Invite>;
    findOneById(id: string): Promise<Error | (Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    })>;
    findAllInvitations(): Promise<(Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
