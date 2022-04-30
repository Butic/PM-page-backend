import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('invite')
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createInviteDto: CreateInviteDto) {
    return this.inviteService.create(createInviteDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findOne(@Body() id: string) {
    return this.inviteService.findById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch()
  update(@Body() updateInviteDto: UpdateInviteDto) {
    return this.inviteService.update(updateInviteDto);
  }
}
