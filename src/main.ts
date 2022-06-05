/*
main.ts : 어플리케이션의 엔트리 파일, The entry file of the application which uses the core function NestFactory to create a Nest application instance
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
