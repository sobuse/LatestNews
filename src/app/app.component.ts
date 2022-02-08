import { Component } from '@angular/core';
import { LatestNewsApiService } from './service/latest-news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LatestNews';
  mArticles: any[] = [];
  mSources: any[] = [];
  constructor(private newsapi:LatestNewsApiService) {
    console.log('app component')
  }
}
