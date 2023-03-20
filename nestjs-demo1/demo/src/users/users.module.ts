import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Tags } from './entities/tags.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '101.34.111.220',
      port: 3306,
      username: 'nest_root',
      password: 'root123',
      database: 'test_nest',
      retryDelay: 500, //重试时间间隔
      retryAttempts: 10, //重试次数
      synchronize: true, //自动将实体类同步到数据库
      autoLoadEntities: true, //自动加载实体
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([Users, Tags]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
