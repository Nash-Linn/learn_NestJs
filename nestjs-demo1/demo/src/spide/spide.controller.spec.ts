import { Test, TestingModule } from '@nestjs/testing';
import { SpideController } from './spide.controller';
import { SpideService } from './spide.service';

describe('SpideController', () => {
  let controller: SpideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpideController],
      providers: [SpideService],
    }).compile();

    controller = module.get<SpideController>(SpideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
