import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContainerComponent } from '../container/container.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CarouselComponent,
    ContainerComponent
  ],
  entryComponents: [],
  exports: [
    CarouselComponent,
    ContainerComponent
  ]
})
export class ComponentsModule {}
