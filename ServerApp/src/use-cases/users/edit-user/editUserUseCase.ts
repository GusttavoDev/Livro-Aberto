import UsersRepository from 'src/repositories/users/implementation/usersRepository';
import EditUserTDO from './editUserTDO';

export default class EditUserUseCase implements EditUserTDO {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
    data,
  }: {
    id: string;
    data: { name: string; profile_img: string };
  }): Promise<void> {
    await this.usersRepository.edit({ id, data });
  }
}
