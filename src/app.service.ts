import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './model/users.schema';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './model/signup.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: SignUpDto) {
    const password = bcrypt.hashSync(createUserDto.password, 12);
    return this.userModel.create({ ...createUserDto, password, active: true });
  }

  async findOne(userName: string): Promise<UserDocument | undefined> {
    const data = await this.userModel.findOne({ userName, active: true });
    return data;
  }

  async findById(userId: string) {
    return await this.userModel.findById(userId);
  }

  async get() {
    return this.userModel.find({ active: true }).lean();
  }

  // async updateOneById(userId: UserDocument['_id']) {
  //   const user  = await this.findById(userId)
  // }
}
