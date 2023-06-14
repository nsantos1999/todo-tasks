import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './shared/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [],
})
export class AppModule {}
