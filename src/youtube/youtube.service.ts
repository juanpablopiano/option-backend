import { Injectable } from '@nestjs/common';
import { youtube, youtube_v3 } from '@googleapis/youtube';

let YoutubeInstance: youtube_v3.Youtube;

@Injectable()
export class YoutubeService {
  private createInstance() {
    if (!YoutubeInstance) {
      YoutubeInstance = youtube({
        version: 'v3',
        auth: process.env.YOUTUBE_API_KEY,
      });
    }
    return YoutubeInstance;
  }

  async findVideo(keyword: string) {
    const Youtube = this.createInstance();
    const videos = await Youtube.search.list({
      q: keyword,
      maxResults: 10,
      part: ['snippet'],
    });

    return videos.data.items;
  }
}
