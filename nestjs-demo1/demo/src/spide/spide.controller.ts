import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpideService } from './spide.service';
import { CreateSpideDto } from './dto/create-spide.dto';
import { UpdateSpideDto } from './dto/update-spide.dto';

@Controller('spide')
export class SpideController {
  constructor(private readonly spideService: SpideService) {}

  @Get()
  findAll() {
    return this.spideService.findAll();
  }
}
