import { Component, OnInit } from '@angular/core';
import {AccountService} from "./account.service";
declare var jQuery:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  isLoggedIn:boolean = false;
  Compte : any ;



  constructor(private accountService:AccountService) {
    accountService.loggedIn.subscribe(p=> {
      this.isLoggedIn = p;

    });
    accountService.Compte.subscribe(account=> {
      this.Compte = account;

    })

  }

  



}
