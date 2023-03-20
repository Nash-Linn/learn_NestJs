import { Module } from '@nestjs/common';
import { SpideService } from './spide.service';
import { SpideController } from './spide.controller';

@Module({
  controllers: [SpideController],
  providers: [SpideService],
})
export class SpideModule {}
