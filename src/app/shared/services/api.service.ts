import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService extends BaseService {

	constructor(
		private _http: HttpClient
	) {
		super();
	}

	public sinup(payload: any) {
		let url = this.apiUrl + 'auth/user';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public login(payload: any) {
		let url = this.apiUrl + 'auth/login';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public getDataFromUsers(): Observable<any> {
		let url = this.apiUrl + 'auth/users';
		return this._http.get(url).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public updateUserData(payload: any) {
		let url = this.apiUrl + 'auth/users';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public getDataFromItemDetails(): Observable<any> {
		let url = this.apiUrl + 'api/itemDetails';
		return this._http.get(url).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public setCategory(payload: any) {
		let url = this.apiUrl + 'api/category';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public setItemDetails(payload: any) {
		let url = this.apiUrl + 'api/itemDetails';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}
	public setItem(payload: any) {
		let url = this.apiUrl + 'api/item';
		return this._http.post(url, payload).pipe(map(this.handleMap), catchError(this.handleError));
	}



}
