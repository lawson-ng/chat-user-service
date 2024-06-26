import { Exclude, Expose, plainToClass } from 'class-transformer';

export class UserEntity {
  @Expose()
  id: number;

  @Expose()
  userName: string;

  @Expose()
  createdAt: string;

  @Expose()
  role: string;

  @Expose()
  name: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(
      this,
      plainToClass(UserEntity, partial, { excludeExtraneousValues: true }),
    );
  }
}
