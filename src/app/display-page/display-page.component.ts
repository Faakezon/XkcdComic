import { Router } from '@angular/router';
import { ComicService } from './../comic.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SpinnerService } from './../spinner.service';
import { XkcdComic } from '../xkcdComic';
import { MdButtonModule, MdIcon } from '@angular/material';




@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})


export class DisplayPageComponent implements OnInit {

  @Input('masterTitle') _title: string;
  @Input('masterImg') _img: string;

  @Output() randomComic = new EventEmitter<any>();


  objSpinnerStatus: boolean;

  constructor (
    private spinnerService: SpinnerService,){
      this.objSpinnerStatus = false;
    }


  ngOnInit() {
        this.spinnerService.spinnerStatus.subscribe((val: boolean) => {
            this.objSpinnerStatus = val;
        });
        this.spinnerService.displaySpinner(true); // enable spinner
 }

 public setSpinner(bool: boolean) {
   this.spinnerService.displaySpinner(bool);
 }


 getRandomComic() {
    console.log('Random Comic');
    this.randomComic.emit();
  }

/*
  getComic() {
      this.xkcdService.getComic().then((data) => {
      this.myjsondata = data;
      this.img = data.img;
      this.loaderService.displayLoader(false);
    });
  }

  getJsonData() {
    return this.myjsondata;
  }

*/

}
