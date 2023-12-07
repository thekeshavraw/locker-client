import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

     public usersData: any = [];
     public isUserLoggedIn: boolean;

     constructor(
          private _storageService: StorageService,
          private _broadcastService: BroadcastService
     ) {
          this.isUserLoggedIn = this._storageService.isUserLoggedIn();
     }

     ngOnInit() {
          this._broadcastService.loggedInUser$.subscribe((message) => {
               if (message == 'USRLOGGEDIN' || message == 'USRLOGGEDOUT') {
                    this.isUserLoggedIn = this._storageService.isUserLoggedIn();
               }
          });
     }

}
