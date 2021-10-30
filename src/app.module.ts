import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateConfigModule } from './config/config.module';

@Module({
  imports: [TemplateConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
