import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "./youtube.service";
import { filter, tap }    from "rxjs/operators";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  searchResults: SearchResult[] = [];
  searchText: string = 'electro boom';
  showError: boolean = false;
  lastQuery: string = '';

  constructor(
    public YoutubeService: YoutubeService
  ) { }

  ngOnInit(): void {

  }

  async search(str: string) {
    const data = await this.searchAsync(str);
    this.searchResults = data.items;
    if (this.searchResults.length === 0 && this.searchText.length !== 0) {
      this.showError = true;
    }
    // this.YoutubeService.getSearchResults(str)
    //   .toPromise()
    //   .then((data) => {
    //     this.searchResults = data.items;
    //   });
  }

  async searchAsync(str: string) {
    this.lastQuery = str;
    return await this.YoutubeService.getSearchResults(str).toPromise();
  }

  visitChannel(video: SearchResult) {
    window.location.href = `https://www.youtube.com/channel/${video.id.channelId}`;
  }

  logMe(obj: any) {
    console.log(obj);
  }

}

export interface SearchResult {
  etag: string,
  id: SearchResultId,
  kind: string,
    snippet: SearchResultSnippet
}

export interface SearchResultId {
  kind: string;
  videoId: string;
  channelId: string;
}

export interface SearchResultSnippet {
  channelId: string,
  channelTitle: string,
  description: string,
  liveBroadcastContent: string,
  publishTime: string,
  publishedAt: string,
  thumbnails: SearchResultSnippetThumbnail,
  title: string
}

export interface SearchResultSnippetThumbnail {
  default: any,
  medium: any,
  high: any,
}
