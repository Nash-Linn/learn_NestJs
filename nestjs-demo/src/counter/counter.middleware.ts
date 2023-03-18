import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('已进入中间键......');
    res.send('禁止访问，请登录');
    // next();
  }
}
