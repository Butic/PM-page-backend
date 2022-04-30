import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/enums/role.enum';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users, UsersDocument } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async findAll() {
    try {
      return this.usersModel.find();
    } catch (error) {
      console.error(error);
    }
  }
  async findById(id: string) {
    try {
      return this.usersModel.findById(id);
    } catch (error) {
      console.error(error);
    }
  }
  async findByEmail(email: string) {
    try {
      return this.usersModel.findOne({ email });
    } catch (error) {
      console.error(error);
    }
  }
  async findByRole(role: Role) {
    try {
      return this.usersModel.find({ role });
    } catch (error) {
      console.error(error);
    }
  }
  async update(updateUsersDto: UpdateUsersDto) {
    try {
      return this.usersModel.findOneAndUpdate(updateUsersDto);
    } catch (error) {
      console.error(error);
    }
  }
  async remove(id: string) {
    try {
      return this.usersModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  }
}
