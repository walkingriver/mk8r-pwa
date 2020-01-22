import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContainerComponent } from '../container/container.component';
import { RandomBlockComponent } from '../random-block/random-block.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    ContainerComponent,
    RandomBlockComponent
  ],
  entryComponents: [],
  exports: [
    ContainerComponent,
    RandomBlockComponent
  ]
})
export class ComponentsModule { }
