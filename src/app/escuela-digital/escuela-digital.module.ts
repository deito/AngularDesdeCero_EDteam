import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscuelaDigitalDirective } from '../escuela-digital.directive';
import { EscuelaDigitalPipe } from '../escuela-digital.pipe';



@NgModule({
  declarations: [EscuelaDigitalDirective, EscuelaDigitalPipe],
  imports: [
    CommonModule
  ]
})
export class EscuelaDigitalModule { }
