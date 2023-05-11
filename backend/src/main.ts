import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interceptor';
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());

  await app.listen(process.env.PORT);
}
bootstrap();
