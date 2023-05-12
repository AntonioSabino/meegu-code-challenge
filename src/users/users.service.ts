import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UserAgeError } from '../common/errors/types/UserAgeError';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { birthdate } = createUserDto;

    const currentDate = new Date();
    const eighteenYearsAgo = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate(),
    );

    if (new Date(birthdate) <= eighteenYearsAgo) {
      return this.repository.create(createUserDto);
    } else {
      throw new UserAgeError('User must be at least 18 years old');
    }
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

  async findManyByName(name: string) {
    return this.repository.findManyByName(name);
  }
}
