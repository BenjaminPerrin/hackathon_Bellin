import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [NgbProgressbarConfig]
})
export class HeroComponent implements OnInit {

  selected;
  ids;
  durability;
  powerstats;
  pvmax;
  turn = 0;
  win = 0;
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
  constructor(private http: HttpClient, config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = false;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
    this.ids = [];
    this.selected = [];
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe((data: any) => {
      // this.ids = data;
      for (let index = 0; index < 5; index++) {
        this.ids.push(data[index]);
      }
    });
  }
  liveGame() {
    this.isLive = false;
  }
  test(me) {
    // console.log(me);
    this.selected.push(me);
    console.log(this.selected);
  }
  winGG(n) {
    if (this.selected[n].powerstats.durability <= 0) {
      this.win = 1;
    }
  }
  attack1() {
    this.turn = 1;
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 10;
    console.log(this.selected[1].powerstats.durability);
    this.winGG(1);
  }
  attack2() {
    this.turn = 0;
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 10;
    console.log(this.selected[0].powerstats.durability);
    this.winGG(0);
  }
  attackH1() {
    this.turn = 1;
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 15;
    console.log(this.selected[1].powerstats.durability);
    this.winGG(1);
  }
  attackH2() {
    this.turn = 0;
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 15;
    console.log(this.selected[0].powerstats.durability);
    this.winGG(0);
  }

}

