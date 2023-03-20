import {
  createParamDecorator,
  SetMetadata,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';

export const Role = (...args: string[]) => SetMetadata('role', args);

export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    console.log('role Decorator data', data);
    return req.url;
  },
);
