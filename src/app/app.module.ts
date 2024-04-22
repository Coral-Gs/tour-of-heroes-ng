import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero-list/heroes.component';
import { PrimengModule } from './primeng/primeng.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    NavComponent,
    HeroSearchComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    PrimengModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
