import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return this.repository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('User not exist');
    }

    return this.repository.remove(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }
}
