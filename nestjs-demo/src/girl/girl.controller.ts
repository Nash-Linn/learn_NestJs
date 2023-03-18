import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
  Inject,
} from '@nestjs/common';
import { GirlService } from './girl.service';

//引入 BoyService  在girl模块中使用boy
import { BoyService } from '../boy/boy.service';

@Controller('girl')
export class GirlController {
  // constructor(private girlService: GirlService) {
  //   //上面这句 相当于 this.girlService = new GirlService()
  // }

  //自定义注入
  constructor(
    @Inject('girl') private girlService: GirlService,
    @Inject('girlArray') private girls: string[],
    @Inject('MyFactory') private myFactory: string[],
    @Inject('Config') private shopName: string,
    private BoyService: BoyService,
  ) {}

  @Get('/test')
  test(): any {
    return this.girls;
  }

  @Get('/test1')
  test1(): any {
    return this.myFactory;
  }

  @Get('/corstest')
  corstest(): object {
    return {
      message: '测试跨域请求',
    };
  }

  @Get('/girlUseBoy')
  girlUseBoy(): any {
    return this.BoyService.findAll();
  }

  @Get('/ConfigModule')
  configModule(): string {
    return this.shopName;
  }

  // @Get()
  // getGirls(): any {
  //   return this.girlService.getGirls();
  // }

  // @Post('add')
  // addGirl(@Body() body): any {
  //   console.log('req', body);
  //   return this.girlService.addGirl();
  // }

  // @Get('/getGirlById')
  // getGirlById(@Query() query): any {
  //   const id: number = parseInt(query.id);
  //   return this.girlService.getGirlById(id);
  // }
  // // getGirlById(@Request() req): any {
  // //   const id: number = parseInt(req.query.id);
  // //   return this.girlService.getGirlById(id);
  // // }

  // @Get('/findGirlById/:id') //可以多个参数 /findGirlById/:id/:name
  // findGirlById(@Param() params, @Headers() header): any {
  //   console.log('header', header);
  //   const id: number = parseInt(params.id);
  //   return this.girlService.getGirlById(id);
  // }
  // // findGirlById(@Request() req): any {
  // //   const id: number = parseInt(req.params.id);
  // //   return this.girlService.getGirlById(id);
  // // }

  //使用数据库--------------------------------------
  @Get('/add')
  addGirl(): any {
    return this.girlService.addGirl();
  }

  @Get('/delete')
  delGirl(@Query() query): any {
    const id = query.id;
    return this.girlService.delGirl(id);
  }

  @Get('/update')
  updateGirl(@Query() query): any {
    const id = query.id;
    return this.girlService.updateGirl(id);
  }

  @Get('/getGirls')
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Get('/findByName')
  findGirlByName(@Query() query): any {
    const name = query.name;
    return this.girlService.findGirlByName(name);
  }
}
