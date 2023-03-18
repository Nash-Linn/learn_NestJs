import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoControllerController } from './demo-controller/demo-controller.controller';
import { DemoModule } from './demo/demo.module';
import { DemoServiceService } from './demo-service/demo-service.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [DemoModule, UserModule],
  controllers: [AppController, DemoControllerController],
  providers: [AppService, DemoServiceService],
})
export class AppModule {}
