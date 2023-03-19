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
  ],
  controllers: [AppController, DemoControllerController],
  providers: [AppService, DemoServiceService],
})
export class AppModule {}
