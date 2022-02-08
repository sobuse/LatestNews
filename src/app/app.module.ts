import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LatestNewsApiService } from './service/latest-news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClient } from '@angular/common/http';

// import { MatButtonModule } from '@angular/material';  MatListModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SportnewsComponent } from './sportnews/sportnews.component';

@NgModule({
  declarations: [AppComponent, SportnewsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClient,
  ],
  providers: [LatestNewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
