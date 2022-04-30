import {
  Controller,
  Request,
  Post,
  UseGuards,
  Response,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { whitelist } from 'config-example/app.config';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}
  static ID: string;
  @Header('Access-Control-Allow-Credentials', 'true')
  @Header('Access-Control-Allow-Origin', `${whitelist[1]}`)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any, @Response() res: any) {
    const response = await this.authService.login(req.user);
    res.cookie('token', response.access_token, {
      httpOnly: true,
      sameSite: 'Lax',
      maxAge: 60 * Math.pow(2, 64),
    });
    const { password, ...rest } = req.user._doc;
    res.status(HttpStatus.OK).json({
      message: 'Login successful',
      myData: rest,
    });
  }

  @Post('logout')
  async logout(@Request() req: any, @Response() res: any) {
    res.cookie('token', ' ', {
      httpOnly: true,
      sameSite: 'Lax',
    });
    res.status(HttpStatus.OK).json({
      message: 'LogOut successful',
    });
    return req.user;
  }
}
