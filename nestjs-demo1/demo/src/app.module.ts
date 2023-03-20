import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoControllerController } from './demo-controller/demo-controller.controller';
import { DemoModule } from './demo/demo.module';
import { DemoServiceService } from './demo-service/demo-service.service';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { PipeModule } from './pipe/pipe.module';
import { LoginModule } from './login/login.module';
import { SpideModule } from './spide/spide.module';
import { GuardModule } from './guard/guard.module';
import { TestsqlModule } from './testsql/testsql.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    DemoModule,
    UserModule,
    ListModule,
    ConfigModule.forRoot({
      path: '/nn',
    }),
    UploadModule,
    PipeModule,
    LoginModule,
    SpideModule,
    GuardModule,
    TestsqlModule,
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '101.34.111.220',
    //   port: 3306,
    //   username: 'nest_root',
    //   password: 'root123',
    //   database: 'test_nest',
    //   retryDelay: 500, //重试时间间隔
    //   retryAttempts: 10, //重试次数
    //   synchronize: true, //自动将实体类同步到数据库
    //   autoLoadEntities: true, //自动加载实体
    //   // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // }),
  ],
  controllers: [AppController, DemoControllerController],
  providers: [AppService, DemoServiceService],
})
export class AppModule {}
