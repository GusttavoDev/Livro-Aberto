import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import User from 'src/entities/User';
import { CreateUserUseCase } from 'src/use-cases/users/create-user/createUserUseCase';
import DeleteUserUseCase from 'src/use-cases/users/delete-user/deleteUserUseCase';
import EditUserUseCase from 'src/use-cases/users/edit-user/editUserUseCase';
import GetUserUseCase from 'src/use-cases/users/get-user/getUserUseCase';
import ListUsersUseCase from 'src/use-cases/users/list-users/listUsersUseCase';

@Controller('api')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly listUsersUseCase: ListUsersUseCase,
    private readonly editUserUseCase: EditUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get('users/')
  async listUsers(): Promise<Omit<User[], 'password'>> {
    try {
      return await this.listUsersUseCase.execute();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string): Promise<Omit<User, 'password'>> {
    try {
      return await this.getUserUseCase.execute({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post('users')
  async createUser(@Body() body: User): Promise<void> {
    const { name, email, password } = body;
    try {
      await this.createUserUseCase.execute({ name, email, password });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put('users/:id')
  async editUser(
    @Param() id: string,
    @Body() body: { name: string; profile_img: string },
  ): Promise<void> {
    try {
      await this.editUserUseCase.execute({ id, data: body });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('users/:id')
  async deleteUser(@Param() id: string): Promise<void> {
    try {
      await this.deleteUserUseCase.execute({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
