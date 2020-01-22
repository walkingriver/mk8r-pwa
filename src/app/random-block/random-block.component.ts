import { Component, OnInit, Input } from '@angular/core';
import { MkItem } from '../mk-item';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-random-block',
  templateUrl: './random-block.component.html',
  styleUrls: ['./random-block.component.scss'],
})
export class RandomBlockComponent implements OnInit {
  @Input() public items: MkItem[];
  topItem: MkItem;

  constructor() { }

  ngOnInit() {
    this.topItem = this.items[0];
  }

  getImage(item: MkItem): string {
    return `assets/images/${item.image}`;
  }

  randomImage() {
    const r = Math.random() * this.items.length;
    const pickOne = Math.floor(r);
    this.topItem = this.items[pickOne];
  }

  spin(period) {
    return interval(period)
      .pipe(tap((i) => { this.randomImage(); }));
  }

}
