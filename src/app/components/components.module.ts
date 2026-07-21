import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContainerComponent } from '../container/container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ],
    declarations: [ContainerComponent],
    exports: [
        ContainerComponent
    ]
})
export class ComponentsModule {}
