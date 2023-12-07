import { Component } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { BroadcastService } from '../shared/services/broadcast.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

	public isUserLoggedIn: boolean = false;
	// this will be used to track whether user is logged in or not .

	constructor(
		private _storageService: StorageService,
		private _broadcastService: BroadcastService
	) {
		this.isUserLoggedIn = this._storageService.isUserLoggedIn();
		// This likely checks some storage or authentication state to determine if the user is logged in.
	}

	ngOnInit() {
		this._broadcastService.loggedInUser$.subscribe((message) => {
			if (message == 'USRLOGGEDIN' || message == 'USRLOGGEDOUT') {
				this.isUserLoggedIn = this._storageService.isUserLoggedIn();
			}
		});
	}
}
