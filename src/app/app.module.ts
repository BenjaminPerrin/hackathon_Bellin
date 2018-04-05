import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: HeroComponent },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
