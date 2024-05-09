import UsersRepository from 'src/repositories/users/implementation/usersRepository';
import { ListUsersTDO } from './listUsersTDO';
import User from 'src/entities/User';

export default class ListUsersUseCase implements ListUsersTDO {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<Omit<User[], 'password'>> {
    return await this.usersRepository.list();
  }
}
