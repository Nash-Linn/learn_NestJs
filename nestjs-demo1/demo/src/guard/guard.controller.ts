import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { RoleGuard } from './role/role.guard';

import { Role, ReqUrl } from './role/role.decorator'; //引入自定义装饰器

import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('guard')
@ApiBearerAuth()
@ApiTags('守卫接口')
@UseGuards(RoleGuard) //局部守卫
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  @ApiOperation({ summary: '创建', description: '描述xxxx' })
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @SetMetadata('role', ['admin'])
  findAll(@ReqUrl() url: string) {
    console.log('url', url);
    return this.guardService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '需要传入一个id' })
  @ApiQuery({ name: 'page', description: '分页' })
  @ApiResponse({ status: 200, description: '成功' })
  @Role('admin')
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
