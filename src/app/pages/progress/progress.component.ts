import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 public  progreso1=70;

 public  progreso2=35;

 public  get getProgreso1()
  {
    return `${this.progreso1}%`;
  }

  public  get getProgreso2()
  {
    return `${this.progreso2}%`;
  }
 
}
