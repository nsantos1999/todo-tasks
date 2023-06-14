import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserProvidersKeys } from './constants/enums/user-providers-keys.enum';
import { UserPrismaRepository } from './repository/implementations/user.prisma.repository';
import { PrismaModule } from 'src/shared/modules/prisma/prisma.module';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserProvidersKeys.USER_REPOSITORY,
      useClass: UserPrismaRepository,
    },
  ],
  imports: [PrismaModule],
})
export class UserModule {}
