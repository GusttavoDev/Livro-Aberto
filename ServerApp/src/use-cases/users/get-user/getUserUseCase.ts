import User from 'src/entities/User';
import GetUserTDO from './getUserTDO';
import UsersRepository from 'src/repositories/users/implementation/usersRepository';

export default class GetUserUseCase implements GetUserTDO {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ id }: { id: string }): Promise<Omit<User, 'password'>> {
    return await this.usersRepository.get({ id });
  }
}
