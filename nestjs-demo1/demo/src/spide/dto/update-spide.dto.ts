import { PartialType } from '@nestjs/mapped-types';
import { CreateSpideDto } from './create-spide.dto';

export class UpdateSpideDto extends PartialType(CreateSpideDto) {}
