import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {
    //上面这句 相当于 this.girlService = new GirlService()
  }
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Post('add')
  addGirl(@Body() body): any {
    console.log('req', body);
    return this.girlService.addGirl();
  }

  @Get('/getGirlById')
  getGirlById(@Query() query): any {
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }
  // getGirlById(@Request() req): any {
  //   const id: number = parseInt(req.query.id);
  //   return this.girlService.getGirlById(id);
  // }

  @Get('/findGirlById/:id') //可以多个参数 /findGirlById/:id/:name
  findGirlById(@Param() params, @Headers() header): any {
    console.log('header', header);
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }
  // findGirlById(@Request() req): any {
  //   const id: number = parseInt(req.params.id);
  //   return this.girlService.getGirlById(id);
  // }
}
