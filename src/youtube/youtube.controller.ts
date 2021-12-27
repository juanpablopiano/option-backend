import { Controller, Get, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeSnippet } from './entities/youtube.entity';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get(':keyword')
  findOne(@Param('keyword') keyword: string): YoutubeSnippet {
    return `Searching for ${keyword}`;
  }
}
