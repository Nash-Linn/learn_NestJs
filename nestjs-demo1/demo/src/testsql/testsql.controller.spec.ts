import { Test, TestingModule } from '@nestjs/testing';
import { TestsqlController } from './testsql.controller';
import { TestsqlService } from './testsql.service';

describe('TestsqlController', () => {
  let controller: TestsqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestsqlController],
      providers: [TestsqlService],
    }).compile();

    controller = module.get<TestsqlController>(TestsqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
