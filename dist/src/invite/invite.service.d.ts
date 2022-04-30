import { Model } from 'mongoose';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { Invite, InviteDocument } from './entities/invite.entity';
export declare const emailFrom = "pm.nvrsk.app@mail.ru";
export declare const emailTo = "kovalev.exceedteam@gmail.com";
export declare const testEmail = "1111@mail.ru";
export declare class InviteService {
    private inviteModel;
    constructor(inviteModel: Model<InviteDocument>);
    create(createInviteDto: CreateInviteDto): Promise<Invite>;
    findById(id: string): Promise<Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(updateInviteDto: UpdateInviteDto): Promise<Invite & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
