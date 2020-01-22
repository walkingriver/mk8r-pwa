import { Component, OnInit, Input } from '@angular/core';
import { MkItem } from '../mk-item';
import { interval } from 'rxjs';
import { tap, takeWhile, finalize } from 'rxjs/operators';

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

  /***
   * Indefinitely rolls the images until unsubscribed
   *  */
  roll(period) {
    return interval(period)
      .pipe(tap((i) => { this.randomImage(); }));
  }

  /**
   * "Spins" the block for a duration,
   * landing on the image name provided.
   * @param name: Which image to stop on.
   * @param duration: How long in ms to spin.
   */
  spin(name: string, duration?: number) {
    duration = duration || 2000;

    const result$ = interval(100)
      .pipe(tap((i) => { this.randomImage(); }),
        takeWhile(v => v < duration),
        finalize(() => {
          this.topItem = this.items.find(v => v.name === name);
        }));

    return result$.toPromise();
  }
}
