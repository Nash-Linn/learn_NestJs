import { Test, TestingModule } from '@nestjs/testing';
import { DemoControllerController } from './demo-controller.controller';

describe('DemoControllerController', () => {
  let controller: DemoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoControllerController],
    }).compile();

    controller = module.get<DemoControllerController>(DemoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
