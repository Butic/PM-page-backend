import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<Users> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      if (await bcrypt.compare(pass, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }
  async login(user: any) {
    const payload = { sub: user._id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      name: payload.email,
      role: payload.role,
    };
  }
}
