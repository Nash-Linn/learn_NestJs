import { Test, TestingModule } from '@nestjs/testing';
import { DemoServiceService } from './demo-service.service';

describe('DemoServiceService', () => {
  let service: DemoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoServiceService],
    }).compile();

    service = module.get<DemoServiceService>(DemoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
