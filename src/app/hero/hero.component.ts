import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  selected;
  ids;
  // durability;
  // idHero;
  // imageHlg;
  // imageHmd;
  // imageHsm;
  // imageHxs;
  // powerH;
  // speedH;
  // strengthH;
  // intelligenceH;
  // nameH;

  // durability2;
  // idHero2;
  // imageHlg2;
  // imageHmd2;
  // imageHsm2;
  // imageHxs2;
  // powerH2;
  // speedH2;
  // strengthH2;
  // intelligenceH2;
  // nameH2;
  // durabilityHealth2 = this.durability2;

  isLive = true;
  hp;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.ids = [];
    this.selected = [];

    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe((data: any) => {
      // this.ids = data;
      for (let index = 0; index < 12; index++) {
        this.ids.push(data[index]);
      }
    });
  }
  liveGame() {
    this.isLive = false;
  }
  test(me, i) {
    // console.log(me);
    this.selected.push(me);
    document.getElementById('heroCard' + i).style.opacity = '0.5';
    console.log(this.selected);
  }
}
