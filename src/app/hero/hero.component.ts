import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [NgbProgressbarConfig]
})
export class HeroComponent implements OnInit {
  @ViewChild('content') private content;

  selected;
  ids;
  durability;
  powerstats;
  pvmax;
  turn = 0;
  win = 0;
  closeResult;
  winner;
  // content;
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
  constructor(private http: HttpClient, config: NgbProgressbarConfig, private modalService: NgbModal, private router: Router) {
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
      for (let index = 0; index < 12; index++) {
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
  openVerticallyCentered() {
    this.modalService.open(this.content, { centered: true });
  }
  winGG(n) {
    if (this.selected[n].powerstats.durability <= 0) {
      this.win = 1;
      this.openVerticallyCentered();
      if (n === 0) {
        this.winner = 1;
      } else if (n === 1) {
        this.winner = 0;
      }
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
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 100;
    console.log(this.selected[1].powerstats.durability);
    this.winGG(1);
  }
  attackH2() {
    this.turn = 0;
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 100;
    console.log(this.selected[0].powerstats.durability);
    this.winGG(0);
  }
  goGame() {
    // this.router.navigate(['game']);
    window.location.reload();
  }
}

