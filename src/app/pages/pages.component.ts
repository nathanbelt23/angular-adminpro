import {  OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import {Component} from '@angular/core';

declare var customInitFunctions: Function;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public  themeService:ThemeService) { }
  anoActual = Date.prototype.getFullYear;

  ngOnInit(): void {
    this.themeService.ThemeDefecto();
   try {
    customInitFunctions();
   } catch (error) {
     console.error(error);
   }
  }


}
