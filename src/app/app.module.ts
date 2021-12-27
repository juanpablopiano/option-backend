import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { YoutubeModule } from '../youtube/youtube.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), YoutubeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
