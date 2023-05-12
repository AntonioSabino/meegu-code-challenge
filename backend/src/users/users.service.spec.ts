import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './repositories/users.repository';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundError } from '../common/errors/types/NotFoundError';

const usersDtos = [
  {
    name: 'John Doe',
    birthdate: new Date('1990-01-01'),
    document: '123456789',
    acceptedTermsAndConditions: true,
    zipcode: '12345-678',
    street: 'Example Street',
    neighborhood: 'Example Neighborhood',
    city: 'Example City',
    state: 'Example State',
  },
  {
    name: 'Jane Doe',
    birthdate: new Date('1990-01-01'),
    document: '987654321',
    acceptedTermsAndConditions: true,
    zipcode: '12345-678',
    street: 'Example Street',
    neighborhood: 'Example Neighborhood',
    city: 'Example City',
    state: 'Example State',
  },
  {
    name: 'Bob Doe',
    birthdate: new Date('1990-01-01'),
    document: '987564321',
    acceptedTermsAndConditions: true,
    zipcode: '12345-678',
    street: 'Example Street',
    neighborhood: 'Example Neighborhood',
    city: 'Example City',
    state: 'Example State',
  },
];

let manyUsersResponse = [
  {
    id: 1,
    ...usersDtos[0],
  },
  {
    id: 2,
    ...usersDtos[1],
  },
  {
    id: 3,
    ...usersDtos[2],
  },
];

const createMockRepository = () => ({
  create: jest.fn((createUserDto: CreateUserDto) => {
    return {
      id: 1,
      ...createUserDto,
    };
  }),
  findOne: jest.fn((id: number) => {
    return {
      id,
      ...usersDtos[0],
    };
  }),
  findAll: jest.fn(() => {
    return [...manyUsersResponse];
  }),
  findManyByName: jest.fn((name: string) => {
    return manyUsersResponse.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }),
  update: jest.fn((id: number, updateUserDto: UpdateUserDto) => {
    return {
      id,
      ...updateUserDto,
    };
  }),
  remove: jest.fn((id: number) => {
    manyUsersResponse = manyUsersResponse.filter((user) => user.id !== id);
  }),
});

const updateUserDto = {
  name: 'Bob Doe',
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should create a user', async () => {
      const user = await service.create(usersDtos[0]);

      expect(user).toEqual({
        id: 1,
        ...usersDtos[0],
      });
    });

    it('should throw an error if user is less than 18 years old', async () => {
      const user = {
        ...usersDtos[0],
        birthdate: new Date('2020-01-01'),
      };

      await expect(service.create(user)).rejects.toThrow(
        'User must be at least 18 years old',
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      await service.create(usersDtos[1]);
      await service.create(usersDtos[2]);

      const users = await service.findAll();

      expect(users.length).toBe(3);
      expect(users).toEqual(manyUsersResponse);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const user = await service.findOne(1);

      expect(user).toEqual({
        id: 1,
        ...usersDtos[0],
      });
    });
  });

  describe('findManyByName', () => {
    it('should return an array of users', async () => {
      const users = await service.findManyByName('doe');

      expect(users.length).toBe(3);
      expect(users).toEqual(manyUsersResponse);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const user = await service.update(1, updateUserDto);

      expect(user).toEqual({
        id: 1,
        ...updateUserDto,
      });
    });

    it('should throw an error if user does not exist', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValue(new NotFoundError('User not found'));

      await expect(service.update(2, updateUserDto)).rejects.toThrow(
        'User not found',
      );
      await expect(service.update(2, updateUserDto)).rejects.toThrowError(
        NotFoundError,
      );
    });
  });

  describe('delete', () => {
    it('should delete a user', async () => {
      await service.remove(1);

      expect(manyUsersResponse.length).toBe(2);
    });

    it('should throw an error if user does not exist', async () => {
      jest
        .spyOn(service, 'remove')
        .mockRejectedValue(new NotFoundError('User not found'));

      await expect(service.remove(2)).rejects.toThrow('User not found');
      await expect(service.remove(2)).rejects.toThrowError(NotFoundError);
    });

    it('should throw an error if user has an active loan', async () => {
      jest
        .spyOn(service, 'remove')
        .mockRejectedValue(
          new Error('User has an active loan and cannot be deleted'),
        );

      await expect(service.remove(1)).rejects.toThrow(
        'User has an active loan and cannot be deleted',
      );
    });
  });
});
