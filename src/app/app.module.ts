import { XkcdComic } from './xkcdComic';
import { SpinnerService } from './spinner.service';
import { ComicService } from './comic.service';
import { ngAnimate } from '@angular/cli';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { MaterialModule, MdButtonModule, MdIcon } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/comic', pathMatch: 'full' },
    { path: 'comic', component: MasterPageComponent },
    { path: 'comic/:id', component: MasterPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    DisplayPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MdButtonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ ComicService, SpinnerService, DisplayPageComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
