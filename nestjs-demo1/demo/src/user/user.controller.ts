import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Response,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @Controller({
//   path: 'user',
//   version: '1',
// })  //控制 user 下所有的版本
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // @Version('1') //单独控制版本
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }

  @Get('/findAll')
  findAll(@Request() req): any {
    console.log(req.query);
    return {
      code: 200,
      message: req.query,
    };
  }

  // @Post('/findAll')
  // findAllPost(@Request() req): any {
  //   console.log(req.body);
  //   return {
  //     code: 200,
  //     message: req.body,
  //   };
  // }

  @Post('/findAll')
  findAllPost(@Body('name') name): any {
    //可以通过往装饰器加参数直接读取
    console.log(name);
    return {
      code: 200,
      name,
    };
  }

  @Get('code')
  createCode(@Request() req, @Response() res, @Session() session) {
    const captcha = this.userService.generateCode();
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code);
    if (session.code.toLocaleLowerCase() === Body?.code.toLocaleLowerCase()) {
      return {
        code: 200,
        message: '验证码正确',
      };
    } else {
      return {
        code: 200,
        message: '验证码错误',
      };
    }
  }
}
