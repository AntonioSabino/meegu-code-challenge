import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { UserAgeError } from '../types/UserAgeError';

@Injectable()
export class UserAgeInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof UserAgeError) {
          throw new BadRequestException(err.message);
        } else {
          throw err;
        }
      }),
    );
  }
}
