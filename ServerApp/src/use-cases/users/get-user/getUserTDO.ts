import User from 'src/entities/User';

export default abstract class GetUserTDO {
  abstract execute({ id }: { id: string }): Promise<Omit<User, 'password'>>;
}
