import User from 'src/entities/User';

export abstract class IUsersRepository {
  abstract get({ id }: { id: string }): Promise<Omit<User, 'password'>>;
  abstract list(): Promise<Omit<User[], 'password'>>;
  abstract create({ name, email, password }: User): Promise<void>;
  abstract edit({
    id,
    data,
  }: {
    id: string;
    data: { name: string; profile_img: string };
  }): Promise<void>;
  abstract delete({ id }: { id: string }): Promise<void>;
}
