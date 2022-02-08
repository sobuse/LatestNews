import { Component } from '@angular/core';
import { LatestNewsApiService } from './service/latest-news-api.service';
import { ApiResponse, NewsItem } from './service/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LatestNews';
  mArticles: NewsItem[] = [];

  constructor(private newsapi: LatestNewsApiService) {
    console.log('app component');
  }

  ngOnInit() {
    this.newsapi.getArticles().subscribe((result: ApiResponse) => {
      this.mArticles = result.results;
      console.log(this.mArticles);
    });
  }
}
