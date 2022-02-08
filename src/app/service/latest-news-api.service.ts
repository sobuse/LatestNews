import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LatestNewsApiService {
  api_key = 'pub_41402da7159f969899505b97cd9fbe8df5b8';

  //newsApiUrl
  newsApiUrl =
    'https://newsdata.io/api/1/news?apikey=pub_41402da7159f969899505b97cd9fbe8df5b8&q=dogecoin';

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(this.newsApiUrl);
  }
  
  initArticles() {
    return this.http.get(
      'https://newsdata.io/api/1/news?apikey=pub_41402da7159f969899505b97cd9fbe8df5b8&country=ng,category=sports'
    );
  }
  getArticleByID() {
    return this.http.get(
      'https://newsdata.io/api/1/news?apikey=pub_41402da7159f969899505b97cd9fbe8df5b8&category=sports'
    );
  }

  topHeader(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
