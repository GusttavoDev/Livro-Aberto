import { Book } from '@prisma/client';

export default class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public profile_img?: string,
    public books?: Book[],
    public id?: string,
  ) {}
}
