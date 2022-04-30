import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
export declare class InviteController {
    private readonly inviteService;
    constructor(inviteService: InviteService);
    create(createInviteDto: CreateInviteDto): Promise<import("./entities/invite.entity").Invite>;
    findOne(id: string): Promise<import("./entities/invite.entity").Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(updateInviteDto: UpdateInviteDto): Promise<import("./entities/invite.entity").Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
