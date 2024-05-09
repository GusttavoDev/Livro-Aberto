import UsersRepository from 'src/repositories/users/implementation/usersRepository';
import DeleteUserTDO from './deleteUserTDO';

export default class DeleteUserUseCase implements DeleteUserTDO {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ id }: { id: string }): Promise<void> {
    await this.usersRepository.delete({ id });
  }
}
