import { Test, TestingModule } from '@nestjs/testing';
import { SpideService } from './spide.service';

describe('SpideService', () => {
  let service: SpideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpideService],
    }).compile();

    service = module.get<SpideService>(SpideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
