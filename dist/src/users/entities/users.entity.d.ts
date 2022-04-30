/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
import { Role } from 'src/enums/role.enum';
export declare type UsersDocument = Users & Document;
export declare class Users {
    _id: Types.ObjectId;
    email: string;
    name: string;
    password: string;
    role: Role;
    stack: string[];
    sideInfo: string;
    projects: string[];
}
export declare const UsersSchema: import("mongoose").Schema<Document<Users, any, any>, import("mongoose").Model<Document<Users, any, any>, any, any, any>, any, any>;
