import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumPipe } from '../enum.pipe';



@NgModule({
  declarations: [EnumPipe],
  imports: [
    CommonModule
  ],
  exports: [
    EnumPipe
  ]
})
export class PipesModule { }
