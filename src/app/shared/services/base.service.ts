import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

@Injectable({
	providedIn: 'root'
})
export class BaseService {

	public apiUrl: string;

	constructor() {
		this.apiUrl = environment.config.api.url;
	}

	protected handleMap(response: any) {
		return new ResponseModel(response);
	}

	protected handleError(response: HttpErrorResponse) {
		let error = {
			status: response.error.status,
			message: response.error.message,
			code: response.status
		};
		return throwError(() => {
			return error;
		});
	}
}
