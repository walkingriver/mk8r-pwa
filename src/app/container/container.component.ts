import { Component, Input, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { MkItem } from '../mk-item';
import { timer } from 'rxjs';
import { tap, takeWhile, finalize } from 'rxjs/operators';

@Component({
  selector: 'mk-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {
  private static audio = new Audio('assets/sounds/item-box.mp3');

  @Input() public items: MkItem[];
  public transform: string;
  public running: boolean;

  @ViewChild('spinner', { static: true }) private spinner: ElementRef;
  private wheel: any;
  private audio = ContainerComponent.audio.cloneNode() as HTMLAudioElement;

  constructor(private zone: NgZone) {
    this.wheel = {
      item: 0,
      translateZ: 0,
      itemAngle: 0,
      itemCount: 0,
      tiles: [],
      spinner: {},
      rotate: ''
    };
  }

  ngAfterViewInit(): void {
    console.log('Initializing Slot3d');

    this.wheel.spinner = this.spinner.nativeElement;
    this.wheel.tiles = this.wheel.spinner.children;

    // const panelSize = this.wheel.tiles[0].clientHeight;
    const panelSize = parseFloat(getComputedStyle(this.wheel.tiles[0]).height);
    // const panelSize = 95;
    const itemCount = this.wheel.tiles.length;
    const itemAngle = 360 / itemCount;
    const tz = Math.round((panelSize / 2) / Math.tan(Math.PI / itemCount));
    const translateZ = 'translateZ(' + tz + 'px)';

    console.log(`Item list contains ${itemCount} items, meaning each will require ${itemAngle} deg and ${tz} px each.`);

    for (let i = 0; i < itemCount; i++) {
      // Set 3D rotation
      const rotate = 'rotateX(' + i * itemAngle + 'deg)';
      const el = this.wheel.tiles[i];
      el.style.transform = rotate + ' ' + translateZ;
    }

    // We'll need these later
    this.wheel.translateZ = -tz;
    this.wheel.item = 0;
    this.wheel.itemAngle = -itemAngle;
    this.wheel.itemCount = itemCount;

    // Set the initial value to something random
    const r = Math.floor(Math.random() * (this.wheel.itemCount - 1));

    // Delay update for a bit to avoid improper change detection
    Promise.resolve(null).then(() => this.item = r);
  }

  get item(): number {
    return this.wheel.item;
  }

  set item(value: number) {
    if (value < 0 || value > this.wheel.itemCount) { value = 0; }

    this.wheel.item = value;

    // Transform the container opposite the item's transform.
    const rotate = 'rotateX(' + value * this.wheel.itemAngle + 'deg)';
    this.transform = rotate;
  }

  getItemByName(name: string): number {
    // Find the item by its name
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        return i;
      }
    }

    return -1;
  }

  getImage(item: MkItem): string {
    return `assets/images/${item.image}`;
  }

  next() {
    this.item = this.item + 1;
  }

  prev() {
    this.item = this.item - 1;
  }

  start() {
    this.running = true;
    // this.audio.play();
  }

  stop(item: number) {
    this.running = false;
    if (item) {
      this.item = item;
    }
  }

  spin(name: string, duration?: number): Promise<number> {
    const ender = timer(10, 500)
      .pipe(tap(() => {
        this.item = Math.floor(Math.random() * (this.wheel.itemCount - 1));
      }),
        takeWhile((v, i) => i < 5),
        finalize(() => {
          let newItem = -1;
          if (name) {
            newItem = this.getItemByName(name);
          }

          if (newItem < 0) {
            newItem = Math.floor(Math.random() * (this.wheel.itemCount - 1));
          }

          this.item = newItem;
        }))
      .toPromise();

    return ender;
  }
}

