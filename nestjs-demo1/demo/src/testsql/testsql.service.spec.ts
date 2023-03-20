import { Test, TestingModule } from '@nestjs/testing';
import { TestsqlService } from './testsql.service';

describe('TestsqlService', () => {
  let service: TestsqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestsqlService],
    }).compile();

    service = module.get<TestsqlService>(TestsqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
