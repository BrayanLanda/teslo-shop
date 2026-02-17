import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

export const RawHeaders = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContextHost) => {
    const req = ctx.switchToHttp().getRequest();
    return req.rawHeaders;
  },
);
