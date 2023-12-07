import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
	public usersData: any = [];
	public editForm: FormGroup;
	public selectedUser: any;


	constructor(
		private _FormBuilder: FormBuilder,
		private _apiService: ApiService
	) {
		this.editForm = this._FormBuilder.group({
			id: [''],
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			email: ['', Validators.required, Validators.email],
			phone: [''],
		});
	}

	ngOnInit(): void {
		this.getDataFromUsers();
	}

	public getDataFromUsers() {
		this._apiService.getDataFromUsers().subscribe({
			next: (res) => {
				this.usersData = res.data;
				console.log(res.data);
			},
			error: (error) => {

			}
		});
	}

	// public editUser(user: any) {
	// 	this.selectedUser = user;
	// 	this.editForm.patchValue(user);
	// }
	public saveUserChanges() {
		const editedUserData = this.editForm.value;
		this._apiService.updateUserData(editedUserData).subscribe({
			next: (res) => {
				console.log("User Data Updated Successfully", res)
			}

		})
	}
	public toggleForm() {

	}
}
