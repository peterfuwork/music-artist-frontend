import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'autoplay': true,
    'dots': true,
    'speed': 300,
  };

  public artistsArr: any = [];
  public artistsObj: any = {};
  public showSpinner = true;

    constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.getData()
      .subscribe(data => {
        this.showSpinner = false;
        this.artistsObj = data;
        this.artistsArr = this.artistsObj.data.queryArtists;
        console.log(this.artistsArr);
      });
  }
  afterChange(e) {
    console.log('afterChange');
  }

}
