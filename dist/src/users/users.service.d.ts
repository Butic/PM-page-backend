import { Model } from 'mongoose';
import { Role } from 'src/enums/role.enum';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users, UsersDocument } from './entities/users.entity';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UsersDocument>);
    findAll(): Promise<(Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findByEmail(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findByRole(role: Role): Promise<(Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(updateUsersDto: UpdateUsersDto): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
