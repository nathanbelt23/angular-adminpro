import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls:['./nopagefound.css']
  
})
export class NopagefoundComponent implements OnInit {


 public   anoActual=new Date().getFullYear();
  constructor() {

 
   }

  ngOnInit(): void {
  }

}
