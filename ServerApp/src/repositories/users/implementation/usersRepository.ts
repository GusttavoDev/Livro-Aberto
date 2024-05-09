import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../IUsersRepository';
import { PrismaService } from 'src/database/prisma.service';

import User from 'src/entities/User';
import { randomUUID } from 'crypto';

@Injectable()
export default class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}
  async get({ id }: { id: string }): Promise<Omit<User, 'password'>> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        profile_img: true,
        books: true,
      },
    });
  }

  async list(): Promise<Omit<User[], 'password'>> {
    return await this.prisma.user.findMany();
  }

  async create({ name, email, password }: User): Promise<void> {
    await await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
        password,
        profile_img: `http://github.com/${name}.png`,
        books: undefined,
      },
    });
  }

  async edit({
    id,
    data,
  }: {
    id: string;
    data: { name: string; profile_img: string };
  }): Promise<void> {
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete({ id }: { id: string }): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
