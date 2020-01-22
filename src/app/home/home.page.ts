import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MarioService } from '../mario.service';
import { Character } from '../character';
import { RandomBlockComponent } from '../random-block/random-block.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy {
  @ViewChild('character', {static: false}) private chars: RandomBlockComponent;
  @ViewChild('vehicle', {static: false}) private cars: RandomBlockComponent;
  @ViewChild('wheel', {static: false}) private tires: RandomBlockComponent;
  @ViewChild('glider', {static: false}) private wings: RandomBlockComponent;

  characters: Character[];
  sub: Subscription;
  vehicles: import("c:/git/mk8r/src/app/vehicle").Vehicle[];
  wheels: import("c:/git/mk8r/src/app/mk-item").MkItem[];
  gliders: import("c:/git/mk8r/src/app/mk-item").MkItem[];

  constructor(mario: MarioService) {
    this.characters = mario.getAllCharacters();
    this.vehicles = mario.getAllVehicles();
    this.wheels = mario.getAllWheels();
    this.gliders = mario.getAllGliders();

  }

  ngAfterViewInit() {
    this.sub = this.chars.spin(100).subscribe();
    this.sub.add(this.tires.spin(100).subscribe());
    this.sub.add(this.wings.spin(100).subscribe());
    this.sub.add(this.cars.spin(100).subscribe());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
