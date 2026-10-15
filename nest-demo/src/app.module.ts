import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'FQszMxwzrWgokixo',
      appSecret: 'NVMD7lFuFsu$doIlxBc9xpd4wNb2yzJc3VZyHNbDQEV53',
      serviceId: 'nest-demo',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
