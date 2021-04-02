import { query } from '@angular/animations';
import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public themeSevice: ThemeService ) { }
  ngOnInit() {
  this.themeSevice.checkCurrentTheme();  
  }

  public changeTheme(theme: string) {
    this.themeSevice.changeTheme(theme);
  }
  
}
