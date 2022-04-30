/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
import { Role } from 'src/enums/role.enum';
export declare type InviteDocument = Invite & Document;
export declare class Invite {
    _id: Types.ObjectId;
    email: string;
    role: Role;
    expiryDate: number;
}
export declare const InviteSchema: import("mongoose").Schema<Document<Invite, any, any>, import("mongoose").Model<Document<Invite, any, any>, any, any, any>, any, any>;
