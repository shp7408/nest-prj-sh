/*
app.controller.spec.ts : 컨트롤러에 대한 단위 테스트, The unit tests for the controller.
*/
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
