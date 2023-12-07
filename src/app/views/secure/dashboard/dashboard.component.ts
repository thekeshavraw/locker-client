import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public itemDetails: any = [];


  constructor(
    private _router: Router,
    private _apiService: ApiService

  ) { }

  ngOnInit(): void {
    this.getDataFromItemDetails();
  }

  public getDataFromItemDetails() {
    this._apiService.getDataFromItemDetails().subscribe({
      next: (res) => {
        this.itemDetails = res.data;
      },
      error: (error) => {
        console.error('Error fetching Data ', error);
      }
    });
  }
  public editItem(item) {

  }
}
