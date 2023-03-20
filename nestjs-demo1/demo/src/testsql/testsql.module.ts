import { Module } from '@nestjs/common';
import { TestsqlService } from './testsql.service';
import { TestsqlController } from './testsql.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testsql } from './entities/testsql.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Testsql], 'demo')],
  controllers: [TestsqlController],
  providers: [TestsqlService],
})
export class TestsqlModule {}
