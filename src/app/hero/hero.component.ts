import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
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

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    let id = 0;
    function getId(n) {
      id = n;
      return id;
    }
    getId(729);
    // this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(data => {
    //   console.log(data);
    // });
    // interface UserResponse {
    //   id: any;
    //   name: any;
    //   powerstats: any;
    //   intelligence: any;
    //   strength: any;
    //   speed: any;
    //   durability: any;
    //   power: any;
    //   images: any;
    //   xs: any;
    //   sm: any;
    //   md: any;
    //   lg: any;
    // }

    this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + id + '.json').subscribe((data: any) => {
      console.log('User id: ' + data.id);
      console.log('User name: ' + data.name);
      console.log('User intel: ' + data.powerstats.intelligence);
      console.log('User strength: ' + data.powerstats.strength);
      console.log('User speed: ' + data.powerstats.speed);
      console.log('User power: ' + data.powerstats.power);
      console.log('User durability: ' + data.powerstats.durability);
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
  }

}
