import { DisplayPageComponent } from './../display-page/display-page.component';
import { ComicService } from './../comic.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { XkcdComic } from './../xkcdComic';
import { Location } from '@angular/common';
import { SpinnerService } from './../spinner.service';
import { MdButtonModule, MdIcon } from '@angular/material';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
  providers: [ComicService]
})
export class MasterPageComponent implements OnInit {

  objSpinnerStatus: boolean;
  currentComic: XkcdComic;


  constructor (private comicService: ComicService, private router: Router, private route: ActivatedRoute, private spinnerService: SpinnerService,
    private location: Location) {
      this.objSpinnerStatus = true;

  }


  ngOnInit() {
      this.getComic();
  }

  getComic(): void {
    this.objSpinnerStatus = true;

      this.comicService.getLatencyComic().then(XkcdComic => this.currentComic = XkcdComic).then((data) => {
        this.objSpinnerStatus = false;
        this.gotoDetail();
        //this.currentComic.title = data.title;
        //this.currentComic.img = data.img;
      });

  }


  getRandomComic(): void {
    this.objSpinnerStatus = true;
      this.comicService.getLatencyRandomComic().then(XkcdComic => this.currentComic = XkcdComic).then((data) => {
        this.objSpinnerStatus = false;
        this.gotoDetail();
        //this.currentComic.title = data.title;
        //this.currentComic.img = data.img;
        console.log(this.currentComic);

      });

  }


  gotoDetail(): void {
    this.router.navigate(['comic', this.currentComic.num]);
  }

}
