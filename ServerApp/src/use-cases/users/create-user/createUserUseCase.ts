import { Injectable } from '@nestjs/common';
import { CreateUserUseTDO } from './createUserTDO';
import User from 'src/entities/User';
import { IUsersRepository } from 'src/repositories/users/IUsersRepository';

@Injectable()
export class CreateUserUseCase implements CreateUserUseTDO {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({ name, email, password }: User): Promise<void> {
    await this.usersRepository.create({ name, email, password });
  }
}
