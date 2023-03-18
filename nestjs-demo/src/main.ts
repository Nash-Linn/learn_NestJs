import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

function MiddlewareAll(req: any, res: any, next: any) {
  console.log('已进入全局中间键');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('api'); //增加前缀

  app.use(cors()); //解决跨域

  app.use(MiddlewareAll); //添加全局中间键

  await app.listen(8080);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
