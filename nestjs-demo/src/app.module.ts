import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_nest',
      retryDelay: 500, //重试时间
      retryAttempts: 10, //重试次数
      synchronize: true, //同步实体
      autoLoadEntities: true, //自动加载实体
    }),
    GirlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
