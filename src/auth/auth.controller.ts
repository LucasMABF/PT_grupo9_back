import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/login-request-body';
import { Public } from 'src/auth/decorators/Public';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginInfo: LoginRequestBody) {
    return this.authService.login(loginInfo);
  }
}
