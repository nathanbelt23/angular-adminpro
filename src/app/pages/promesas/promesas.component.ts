import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    console.log('Promesas');

  }

  ngOnInit(): void {

    const prom = new Promise((resolve, reject) => {
      resolve("Hi nathaniel");

    });

    prom.then(msg => { console.log(msg); });

    this.getUsuarios();
  }

  public getUsuarios() {

    /* /// antes  
    fetch('https://reqres.in/api/users/').
      then(res => {
        res.json().then(body => { console.log(body.data); });
         }
      ); */
      
      return  new  Promise((resolve, reject)=>
      {

      fetch('https://reqres.in/api/users/').
      then(res => res.json()).
      then(body=>{ console.log(body.data) ;return body.data;});
      }
      );
      
  }
}