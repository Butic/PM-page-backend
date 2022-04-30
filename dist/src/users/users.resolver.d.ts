import { Model } from 'mongoose';
import { Users, UsersDocument } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Role } from 'src/enums/role.enum';
export declare class UsersResolver {
    private usersModel;
    private readonly usersService;
    constructor(usersModel: Model<UsersDocument>, usersService: UsersService);
    create(createUsersDto: CreateUsersDto): Promise<Users>;
    findAll(): Promise<(Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOneByID(id: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findOneByEmail(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAllByRole(role: Role): Promise<(Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    deleteUserById(_id: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
