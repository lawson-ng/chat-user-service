import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDocument } from './model/users.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_users' })
  async get() {
    const data = await this.appService.get();
    return data;
  }

  @MessagePattern({ cmd: 'get_profile' })
  async getProfile(user: UserDocument) {
    return user;
  }
}
