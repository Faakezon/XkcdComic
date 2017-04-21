import { DisplayPageComponent } from './../display-page/display-page.component';
import { ComicService } from './../comic.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { XkcdComic } from './../xkcdComic';
import { Location } from '@angular/common';


import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
  providers: [ComicService]
})
export class MasterPageComponent implements OnInit {

  currentComic: XkcdComic;

  id: number;

  masterTitle: string = '';
  masterImg: string = '';

  constructor (private comicService: ComicService, private display: DisplayPageComponent, private router: Router, private route: ActivatedRoute,
    private location: Location) {
  }


  ngOnInit() {
    this.display.setSpinner(true);
    this.getComic()
  }

  getComic(): void {
    this.comicService.getLatencyComic().then(XkcdComic => this.currentComic = XkcdComic).then((data) => {
      this.id = this.currentComic.num;
      this.masterTitle = this.currentComic.title;
      this.masterImg = this.currentComic.img;
      this.display.setSpinner(false);
      this.gotoDetail();
    });

  }

  gotoDetail(): void {
    this.router.navigate(['comic', this.currentComic.num]);
  }


  randomComic() {
    this.display.setSpinner(true);
    this.comicService.getLatencyRandomComic().then(XkcdComic => this.currentComic = XkcdComic).then((data) => {
      this.id = this.currentComic.num;
      this.masterTitle = this.currentComic.title;
      this.masterImg = this.currentComic.img;
      this.display.setSpinner(false);
      console.log(this.currentComic.num);
      this.gotoDetail();
    });

  }



}
