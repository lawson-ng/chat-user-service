import { IsNotEmpty, MinLength } from 'class-validator';

export class SignUpDto {
  @MinLength(6, {
    message: 'Tên tài khoản từ 6 kí tự.',
  })
  @IsNotEmpty({
    message: 'Tên tài khoản không được để trống.',
  })
  userName: string;

  @MinLength(8, {
    message: 'Mật khẩu ít nhất 8 kí tự.',
  })
  @IsNotEmpty({
    message: 'Mật khẩu không được để trống.',
  })
  password: string;

  @MinLength(8, {
    message: 'Mật khẩu ít nhất 8 kí tự.',
  })
  @IsNotEmpty({
    message: 'Mật khẩu không được để trống.',
  })
  confirmPassword: string;
}
