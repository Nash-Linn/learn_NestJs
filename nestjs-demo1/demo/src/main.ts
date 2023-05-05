import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { join } from 'path';
import { ResponseInterceptor } from './common/responseInterceptor';
import { AnomalyInterceptor } from './common/anomalyInterceptor';
import { ValidationPipe } from '@nestjs/common'; //全局引入校验
// import { RoleGuard } from './guard/role/role.guard';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; //接口文档
const whiteList = ['/list'];

function MiddleWareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  // if (whiteList.includes(req.originalUrl)) {
  //   next();
  // } else {
  //   res.send({
  //     message: '无法通过',
  //   });
  // }
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(MiddleWareAll);

  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/picture',
  }); //访问静态资源

  app.use(
    session({
      secret: 'nash',
      rolling: true,
      name: 'sid',
      cookie: {
        maxAge: 999999999, //过期时间 单位毫秒
      },
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor()); //想要拦截器
  app.useGlobalFilters(new AnomalyInterceptor());

  app.useGlobalPipes(new ValidationPipe()); //全局引入管道校验

  // app.useGlobalGuards(new RoleGuard()); //全局守卫

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('api doc')
    .setDescription('api description')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
