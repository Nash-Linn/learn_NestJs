import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Tags } from './entities/tags.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Users, Tags], 'test_nest')],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
