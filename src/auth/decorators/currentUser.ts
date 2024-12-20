import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayload } from '../dto/user-payload';

export const CurrentUser = createParamDecorator(
  (data: keyof UserPayload | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return data ? request.user[data] : request.user;
  },
);
