import { PartialType } from '@nestjs/swagger';
import { CreateTestsqlDto } from './create-testsql.dto';

export class UpdateTestsqlDto extends PartialType(CreateTestsqlDto) {}
