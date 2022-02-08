import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class LatestNewsApiService {
  api_key = 'pub_4422736d050b1f9ad6f85269df3d9c62c3eb';

  //newsApiUrl
  newsApiUrl = `https://newsdata.io/api/1/news?apikey=${this.api_key}`;

  constructor(private http: HttpClient) {}

  getArticles(country: string = 'ng'): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.newsApiUrl}&country=${country}`);
  }
  getByCategories(categories: string) {
    return this.http.get(`${this.newsApiUrl}&category=${categories}`);
  }
}
