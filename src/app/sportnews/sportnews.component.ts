import { Component, OnInit } from '@angular/core';
import { LatestNewsApiService } from '../service/latest-news-api.service';
@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css'],
})
export class SportnewsComponent implements OnInit {
  constructor(private service: LatestNewsApiService) {}

  sportnewDisplay: any[] | undefined;
  ngOnInit(): void {
    // this.service.topHeader().subscribe((result)=>this.sportnewDisplay = result.)
  }
}
