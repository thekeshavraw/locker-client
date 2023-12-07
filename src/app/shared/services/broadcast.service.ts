import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BroadcastService {

	public loggedInUserSource: Subject<any> = new Subject<any>();
	public loggedInUser$ = this.loggedInUserSource.asObservable();

	constructor() {

	}

	public triggerLoggedInUserEvent(data) {
		this.loggedInUserSource.next(data);
	}
}
