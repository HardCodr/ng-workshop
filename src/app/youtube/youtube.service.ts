import { Injectable }  from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable }  from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(
    public http: HttpClient
  ) { }

  getSearchResults(str: string = '', maxResults: number = 25): Observable<any> {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet' +
      '&maxResults=' + maxResults +
      '&q='+ str +
      '&key=' + environment.apiKeys.google;
    return this.http.get(url);
  }

  isAuthorized() {
    // logic here

    return true;
  }

}
