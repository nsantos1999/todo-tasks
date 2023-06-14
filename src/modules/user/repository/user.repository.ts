import { User } from '../entities/user.entity';

export interface UserRepository {
  findAll(): Promise<User[]>;
}
