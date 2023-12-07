import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  public itemDetailsForm: FormGroup;

  constructor(
    public _ApiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.createItemForm();
  }
  public createItemForm() {
    this.itemDetailsForm = new FormGroup({
      itemId: new FormControl(),
      name: new FormControl(),
      accountNo: new FormControl(),
      ifscCode: new FormControl(),
      user: new FormControl(),
      secret: new FormControl(),
      description: new FormControl(),
      status: new FormControl()
    });

  }
  public onSave() {
    let payload = this.itemDetailsForm.value;
    console.log(payload);
    this._ApiService.setItemDetails(payload).subscribe({
      next: (res) => {
        console.log(res);
        window.alert("Item Details created successfully");
        window.location.reload();
      }
    });
  }

}







