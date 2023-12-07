import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public createItemForm: FormGroup;
  constructor(
    public _ApiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.createInsertItemForm();
  }

  public createInsertItemForm() {
    this.createItemForm = new FormGroup({
      name: new FormControl(),
      status: new FormControl()
    });
  }
  public onSave() {
    let payload = this.createItemForm.value;
    this._ApiService.setCategory(payload).subscribe({
      next: (res) => {
        console.log(res);
        window.alert("Category saved successfully");
        window.location.reload();
      }
    });
  }

}
