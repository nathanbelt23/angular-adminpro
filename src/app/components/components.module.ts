import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [IncrementadorComponent, DonaComponent, ModalImagenComponent,ModalImagenComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    PipesModule

  ],
  exports:[IncrementadorComponent,DonaComponent, ModalImagenComponent]
})
export class ComponentsModule { }
