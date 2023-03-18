import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoyModule } from './boy/boy.module';

import { ConfigModule } from './config/config.module'; //全局模块

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '101.34.111.220',
      port: 3306,
      username: 'nest_root',
      password: 'root123',
      database: 'test_nest',
      retryDelay: 500, //重试时间
      retryAttempts: 10, //重试次数
      synchronize: true, //同步实体
      autoLoadEntities: true, //自动加载实体
    }),
    GirlModule,
    BoyModule,
    // ConfigModule, //全局模块 普通引入
    ConfigModule.forRoot('商店'), // 动态模块引入
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
