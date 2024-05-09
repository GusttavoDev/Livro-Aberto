import User from 'src/entities/User';

export abstract class CreateUserUseTDO {
  abstract execute(data: User): Promise<void>;
}
