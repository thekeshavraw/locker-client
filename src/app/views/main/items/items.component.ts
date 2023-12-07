import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	public itemForm: FormGroup;

	constructor(
		public _apiService: ApiService
	) {

	}

	ngOnInit(): void {
		this.createItemForm();
	}

	public createItemForm() {
		this.itemForm = new FormGroup({
			categoryId: new FormControl(),
			title: new FormControl(),
			description: new FormControl(),
			status: new FormControl()
		});
	}

	public onSave() {
		let payload = this.itemForm.value;
		this._apiService.setItem(payload).subscribe({
			next: (res) => {
				console.log("Item created successfully");
				window.alert("Item created successfully");
				window.location.reload();
			}
		})
	}
}
