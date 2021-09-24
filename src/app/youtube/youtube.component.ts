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
  searchText: string = '';

  constructor(
    public YoutubeService: YoutubeService
  ) { }

  ngOnInit(): void {

  }

  search(str: string) {
    this.YoutubeService.getSearchResults(str)
      .subscribe((data) => {
        this.searchResults = data.items;
      });
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
