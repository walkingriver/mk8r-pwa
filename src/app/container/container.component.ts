import { Component, Input, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { MkItem } from '../mk-item';

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

  // @ViewChild('spinner', { static: true }) private root: ElementRef;
  @ViewChild('figure', { static: true }) private figureTag: ElementRef;

  figure: any;
  currentItem = 0;
  translateZ = 0;
  itemAngle = 0;
  itemCount = 0;
  images: HTMLCollectionOf<HTMLElement>;
  // spinner = {};
  gap = 0;
  bfc = false;
  rotate = ''
  theta = 0;
  private audio = ContainerComponent.audio.cloneNode() as HTMLAudioElement;
  transformOrigin: string;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit(): void {
    console.log('Initializing Slot3d');

    // this.spinner = this.root.nativeElement;
    this.figure = this.figureTag.nativeElement;
    this.images = this.figure.children as HTMLCollectionOf<HTMLElement>;

    this.itemCount = this.images.length;

    this.theta = 2 * Math.PI / this.itemCount;

    // Promise.resolve(null).then(() => this.item = r);

    this.setupCarousel(this.itemCount, parseFloat(getComputedStyle(this.images[0]).width));
  }

  private setupCarousel(n, s) {
    const apothem = s / (2 * Math.tan(Math.PI / n));

    this.transformOrigin = `50% 50% ${- apothem}px`;

    for (var i = 0; i < n; i++)
      this.images[i].style.padding = `${this.gap}px`;
    for (i = 1; i < n; i++) {
      this.images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
      this.images[i].style.transform = `rotateX(${i * this.theta}rad)`;
    }
    if (this.bfc)
      for (i = 0; i < n; i++)
        this.images[i].style.backfaceVisibility = 'hidden';

    this.rotateCarousel(this.item);
  }

  rotateCarousel(i) {
    this.item = i;
  }

  get item(): number {
    return this.currentItem;
  }

  set item(value: number) {
    if (value < 0 || value > this.itemCount) { value = 0; }

    this.currentItem = value;

    // Transform the container opposite the item's transform.
    const rotate = 'rotateX('+value * -(this.theta) + 'rad)';
    this.transform = rotate;
    // this.figure.style.transform = rotate;
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
    return new Promise((resolve, reject) => {
      duration = duration || 2000;

      setTimeout(() => {
        this.start();

        let item = -1;
        if (name) {
          item = this.getItemByName(name);
        }

        if (item < 0) {
          item = Math.floor(Math.random() * (this.itemCount - 1));
        }

        setTimeout(() => {
          this.zone.run(() => {
            this.stop(item);
            resolve(item);
          });
        }, duration);
      }, 1);
    });
  }
}

