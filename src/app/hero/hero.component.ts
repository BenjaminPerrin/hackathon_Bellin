import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  getIdP2;
  getIdP1;

  durability;
  idHero;
  imageHlg;
  imageHmd;
  imageHsm;
  imageHxs;
  powerH;
  speedH;
  strengthH;
  intelligenceH;
  nameH;

  durability2;
  idHero2;
  imageHlg2;
  imageHmd2;
  imageHsm2;
  imageHxs2;
  powerH2;
  speedH2;
  strengthH2;
  intelligenceH2;
  nameH2;
  durabilityHealth2 = this.durability2;

  isLive = true;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    let id = 0;
    let id2 = 0;
    function getId(value) {
      id = value;
      return id;
    }
    getId(404);
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + id + '.json').subscribe((data: any) => {
      this.idHero = parseInt(data.id, 10);
      this.nameH = data.name;
      this.intelligenceH = parseInt(data.powerstats.intelligence, 10);
      this.strengthH = parseInt(data.powerstats.strength, 10);
      this.speedH = parseInt(data.powerstats.speed, 10);
      this.powerH = parseInt(data.powerstats.power, 10);
      this.imageHxs = data.images.xs;
      this.imageHsm = data.images.sm;
      this.imageHmd = data.images.md;
      this.imageHlg = data.images.lg;
      this.durability = parseInt(data.powerstats.durability, 10);

    });
    function getIdP2(n) {
      id2 = n;
      return id2;
    }
    getIdP2(2);
    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + id2 + '.json').subscribe((data: any) => {
      this.idHero2 = parseInt(data.id, 10);
      this.nameH2 = data.name;
      this.intelligenceH2 = parseInt(data.powerstats.intelligence, 10);
      this.strengthH2 = parseInt(data.powerstats.strength, 10);
      this.speedH2 = parseInt(data.powerstats.speed, 10);
      this.powerH2 = parseInt(data.powerstats.power, 10);
      this.imageHxs2 = data.images.xs;
      this.imageHsm2 = data.images.sm;
      this.imageHmd2 = data.images.md;
      this.imageHlg2 = data.images.lg;
      this.durability2 = parseInt(data.powerstats.durability, 10);
    });
  }
  getNumber(value) {
    const id = value;
    return id;
  }
  attack1() {
    this.durabilityHealth2 -= 10;

    console.log(this.durabilityHealth2);
  }
  attack2() {
    console.log(this.durability2 - 5);
  }
  liveGame() {
    this.isLive = false;
  }
}
