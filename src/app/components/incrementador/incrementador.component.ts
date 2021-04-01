import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('valorInicial')  progreso=70;
 @Output()  valorSalida: EventEmitter<number> = new EventEmitter() ;
  constructor() { }

  ngOnInit(): void {
  }





  public  get getProgreso()
   {
 
     return `${this.progreso}%`;
   }
 
   public  cambiarValor(valor:number)
   {
       this.progreso= this.progreso+valor;
       if(this.progreso>100)
       {
         this.progreso=100;
       }
       else
       if(this.progreso<0)
       {
         this.progreso=0;
       }

       this.valorSalida.emit(this.progreso);
 
   }

   cambiaTxt(valor:number)
   {
    if(valor>100)
    {
     valor=100;
    }
    else
    if(valor<0)
    {
     valor=0;
    }

    this.progreso= valor;

    this.valorSalida.emit(this.progreso);
   }

}
