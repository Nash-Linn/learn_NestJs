import { Module, NestModule, RequestMethod } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterMiddleware } from '../counter/counter.middleware';

import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { Girl } from './entities/girl.entities';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';

//引入 BoyService  在girl模块中使用boy
import { BoyService } from '../boy/boy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [
    {
      provide: 'girl',
      useClass: GirlService,
    },
    {
      provide: 'girlArray',
      useValue: ['小红', '小翠', '小李'],
    },
    {
      provide: 'MyFactory',
      useFactory() {
        console.log('MyFactory--------------');
        return 'consoleLog MyFactory';
      },
    },
    BoyService,
  ],
  // providers: [GirlService],  //简写模式
})
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //配置局部中间键
    consumer.apply(CounterMiddleware).forRoutes({
      path: 'girl', //需要拦截的路由
      method: RequestMethod.GET, //需要拦截的方法
    });
  }
}
