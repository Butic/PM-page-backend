import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/enums/role.enum';

@Resolver(() => Users)
export class UsersResolver {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Users, { name: 'CreateNewUser' })
  async create(
    @Args('usersData') createUsersDto: CreateUsersDto,
  ): Promise<Users> {
    try {
      const ifUserExists = await this.usersService.findByEmail(
        createUsersDto.email,
      );
      if (!ifUserExists) {
        createUsersDto.password = await bcrypt.hash(
          createUsersDto.password,
          10,
        );
        const createdUsers = new this.usersModel(createUsersDto);
        const result = createdUsers.save();
        return result;
      } else throw new Error('User allready exists');
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => [Users], { name: 'findAllUsers' })
  async findAll() {
    return await this.usersService.findAll();
  }
  @Query(() => Users, { name: 'findUserByID' })
  findOneByID(@Args('id') id: string) {
    return this.usersService.findById(id);
  }
  @Query(() => Users, { name: 'findUserByEmail' })
  async findOneByEmail(@Args('email') email: string) {
    return await this.usersService.findByEmail(email);
  }
  @Query(() => [Users], { name: 'findAllUsersByRole' })
  async findAllByRole(@Args('role') role: Role) {
    return await this.usersService.findByRole(role);
  }
  @Mutation(() => Users, { name: 'deleteUser' })
  async deleteUserById(@Args('_id') _id: string) {
    return await this.usersService.remove(_id);
  }
}
