/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/dtabase.module';
import { HttpModule } from './http/view-models/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
