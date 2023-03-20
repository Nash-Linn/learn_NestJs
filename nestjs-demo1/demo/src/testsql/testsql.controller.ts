import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestsqlService } from './testsql.service';
import { CreateTestsqlDto } from './dto/create-testsql.dto';
import { UpdateTestsqlDto } from './dto/update-testsql.dto';

@Controller('testsql')
export class TestsqlController {
  constructor(private readonly testsqlService: TestsqlService) {}

  @Post()
  create(@Body() createTestsqlDto: CreateTestsqlDto) {
    return this.testsqlService.create(createTestsqlDto);
  }

  @Get()
  findAll() {
    return this.testsqlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsqlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestsqlDto: UpdateTestsqlDto) {
    return this.testsqlService.update(+id, updateTestsqlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsqlService.remove(+id);
  }
}
