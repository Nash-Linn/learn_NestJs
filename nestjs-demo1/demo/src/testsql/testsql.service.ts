import { Injectable } from '@nestjs/common';
import { CreateTestsqlDto } from './dto/create-testsql.dto';
import { UpdateTestsqlDto } from './dto/update-testsql.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testsql } from './entities/testsql.entity';
@Injectable()
export class TestsqlService {
  constructor(
    @InjectRepository(Testsql) readonly Testsql: Repository<Testsql>,
  ) {}

  create(createTestsqlDto: CreateTestsqlDto) {
    const data = new Testsql();
    data.name = '测试';
    return this.Testsql.save(data);
  }

  findAll() {
    return `This action returns all testsql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testsql`;
  }

  update(id: number, updateTestsqlDto: UpdateTestsqlDto) {
    return `This action updates a #${id} testsql`;
  }

  remove(id: number) {
    return `This action removes a #${id} testsql`;
  }
}
