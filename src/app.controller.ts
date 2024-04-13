import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDocument, UserReq } from './model/users.schema';
import { UserEntity } from './model/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_users' })
  async get() {
    const data = await this.appService.get();
    return data;
  }

  @MessagePattern({ cmd: 'get_profile' })
  async getProfile(user: UserReq) {
    console.log('🚀 ~ AppController ~ getProfile ~ user:', user);
    return this.appService
      .findById(`${user.userId}`)
      .then((data) => new UserEntity(data));
  }

  @MessagePattern({ cmd: 'get_profile_by_id' })
  async getProfileById(id: string) {
    return this.appService.findById(id);
  }

  @MessagePattern({ cmd: 'update_profile' })
  async updateProfile(user: UserDocument) {
    return user;
  }
}
