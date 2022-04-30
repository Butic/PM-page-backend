import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { Invite, InviteDocument } from './entities/invite.entity';
import * as nodemailer from 'nodemailer';
import { emailConfig } from 'config-example/invitation.config';

export const emailFrom = 'pm.nvrsk.app@mail.ru';
export const emailTo = 'kovalev.exceedteam@gmail.com';
export const testEmail = '1111@mail.ru';

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  logger: true,
  auth: {
    user: emailFrom,
    pass: 'CG2cZsV5KakyY7jfYfcT',
  },
});

@Injectable()
export class InviteService {
  constructor(
    @InjectModel(Invite.name) private inviteModel: Model<InviteDocument>,
  ) {}
  async create(createInviteDto: CreateInviteDto): Promise<Invite> {
    try {
      const createdInvite = new this.inviteModel(createInviteDto);
      createdInvite.expiryDate = Date.now() + 60 * 1000 * 60;
      const result = await createdInvite.save();
      console.log(result);
      await transporter.sendMail(emailConfig(result));
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async findById(id: string) {
    try {
      return this.inviteModel.findById(id);
    } catch (error) {
      console.error(error);
    }
  }
  async findAll() {
    try {
      return this.inviteModel.find();
    } catch (error) {
      console.error(error);
    }
  }
  async update(updateInviteDto: UpdateInviteDto) {
    try {
      return this.inviteModel.findOneAndUpdate(updateInviteDto);
    } catch (error) {
      console.error(error);
    }
  }
}
