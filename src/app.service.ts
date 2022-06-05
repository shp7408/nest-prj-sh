/*
app.service.ts : 기본 서비스, A basic service with a single method.
*/
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
