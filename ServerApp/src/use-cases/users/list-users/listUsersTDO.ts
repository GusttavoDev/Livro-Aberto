import User from 'src/entities/User';

export abstract class ListUsersTDO {
  abstract execute(): Promise<Omit<User[], 'password'>>;
}
