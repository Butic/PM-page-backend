import { Role } from 'src/enums/role.enum';
export declare class CreateUsersDto {
    email: string;
    name: string;
    password: string;
    role: Role;
    stack?: string[];
    sideInfo: string;
    projects: string[];
}
