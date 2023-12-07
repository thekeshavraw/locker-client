import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public isUserLoggedIn: boolean = false;

	constructor(
		private _storageService: StorageService,
		private _broadcastService: BroadcastService,
		private _router: Router
	) {
		this.isUserLoggedIn = this._storageService.isUserLoggedIn();
	}

	ngOnInit() {
		this._broadcastService.loggedInUser$.subscribe((message) => {
			if (message == 'USRLOGGEDIN' || message == 'USRLOGGEDOUT') {
				this.isUserLoggedIn = this._storageService.isUserLoggedIn();
			}
			// console.log(this.isUserLoggedIn);
		});
	}

	public logout() {
		this._storageService.logout();
		this._broadcastService.triggerLoggedInUserEvent('USRLOGGEDOUT');
		this._router.navigateByUrl('');
	}
}
