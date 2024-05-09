import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserUseCase } from './use-cases/users/create-user/createUserUseCase';
import UsersRepository from './repositories/users/implementation/usersRepository';
import { UsersController } from './controllers/usersController';
import { IUsersRepository } from './repositories/users/IUsersRepository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: IUsersRepository,
      useClass: UsersRepository,
    },
    CreateUserUseCase,
  ],
})
export class AppModule {}
