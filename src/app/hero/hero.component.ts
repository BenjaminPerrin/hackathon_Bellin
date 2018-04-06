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
  htmlStr = '';

  selected;
  ids;
  durability;
  intelligence;
  powerstats;
  power;
  pvmax;
  turn = 0;
  win = 0;
  closeResult;
  winner;
  isLive = true;
  hp;
  onlyOne;
  onlyTwo;
  healOne;
  healTwo;
  strength;
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
  Lifesteal() {
    this.turn = 1;
    this.selected[1].powerstats.durability = (this.selected[1].powerstats.durability
      - Math.floor((this.selected[0].powerstats.strength / 10)));
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability
      + Math.floor((this.selected[0].powerstats.intelligence / 10));
    this.winGG(1);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[0].name + '</strong> inflige ' +
      Math.floor((this.selected[0].powerstats.strength / 10)) + ' de degats et se heal de ' +
      Math.floor((this.selected[0].powerstats.intelligence / 10)) + 'hp,<br>';
  }
  heal() {
    this.healOne = 1;
    this.turn = 1;
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability
      + Math.floor((this.selected[0].powerstats.intelligence / 5));
    this.winGG(1);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[0].name + '</strong> se heal de ' +
      Math.floor((this.selected[0].powerstats.intelligence / 5)) + 'hp,<br>';
  }
  powerShoot() {
    this.turn = 1;
    this.selected[1].powerstats.durability = (this.selected[1].powerstats.durability
      - Math.floor((this.selected[0].powerstats.power / 5)));
    this.winGG(1);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[0].name + '</strong> inflige ' +
      Math.floor((this.selected[0].powerstats.power / 5)) + ' de degats,<br>';
  }
  // player 2
  powerShoot2() {
    this.turn = 0;
    this.selected[0].powerstats.durability = (this.selected[0].powerstats.durability
      - Math.floor((this.selected[1].powerstats.power / 5)));
    this.winGG(0);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[1].name + '</strong> inflige ' +
      Math.floor((this.selected[1].powerstats.power / 5)) + ' de degats,<br>';
  }
  heal2() {
    this.healTwo = 1;
    this.turn = 0;
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability
      + Math.floor((this.selected[1].powerstats.intelligence / 5));
    this.winGG(0);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[1].name + '</strong> se heal de ' +
      Math.floor((this.selected[1].powerstats.intelligence / 5)) + 'hp,<br>';
  }
  Lifesteal2() {
    this.turn = 0;
    this.selected[0].powerstats.durability = (this.selected[0].powerstats.durability
      - Math.floor((this.selected[1].powerstats.strength / 10)));
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability
      + Math.floor((this.selected[1].powerstats.intelligence / 10));
    this.winGG(0);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[1].name + '</strong> inflige ' +
      Math.floor((this.selected[1].powerstats.strength / 10)) + ' de degats et se heal de ' +
      Math.floor((this.selected[1].powerstats.intelligence / 10)) + 'hp,<br>';
  }
  attackH1() {
    this.onlyOne = 1;
    this.turn = 1;
    this.selected[1].powerstats.durability = this.selected[1].powerstats.durability - 40;
    this.winGG(1);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[0].name + '</strong> inflige 40 de degats,<br>';
  }
  attackH2() {
    this.onlyTwo = 1;
    this.turn = 0;
    this.selected[0].powerstats.durability = this.selected[0].powerstats.durability - 40;
    this.winGG(0);
    this.htmlStr = this.htmlStr + ' <strong>' + this.selected[1].name + '</strong> inflige 40 de degats,<br>';
  }

  goGame() {
    window.location.reload();
  }
  sound() {
    const audio = new Audio('../assets/sound/fight.wav');
    audio.play();
  }
}
