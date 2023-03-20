import { Module } from '@nestjs/common';
import { TestsqlService } from './testsql.service';
import { TestsqlController } from './testsql.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testsql } from './entities/testsql.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '101.34.111.220',
      port: 3306,
      username: 'demo',
      password: 'Gd2EpknAmrm7JLP3',
      database: 'demo',
      retryDelay: 500, //重试时间间隔
      retryAttempts: 10, //重试次数
      synchronize: true, //自动将实体类同步到数据库
      autoLoadEntities: true, //自动加载实体
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([Testsql]),
  ],
  controllers: [TestsqlController],
  providers: [TestsqlService],
})
export class TestsqlModule {}
