import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from '../views/shared/home/home.component';
import { DashboardComponent } from '../views/secure/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../views/shared/footer/footer.component';
import { SidebarComponent } from '../views/secure/sidebar/sidebar.component';
import { HeaderComponent } from '../views/shared/header/header.component';
import { LoginComponent } from '../views/public/login/login.component';
import { SignupComponent } from '../views/public/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { CategoryComponent } from '../views/main/category/category.component';
import { ItemDetailsComponent } from '../views/main/item-details/item-details.component';
import { ItemsComponent } from '../views/main/items/items.component';
import { ViewComponent } from '../views/main/view/view.component';


@NgModule({
     declarations: [
          LayoutComponent,
          HeaderComponent,
          FooterComponent,
          SidebarComponent,
          LoginComponent,
          SignupComponent,
          HomeComponent,
          DashboardComponent,
          CategoryComponent,
          ItemDetailsComponent,
          ItemsComponent,
          ViewComponent
     ],
     imports: [
          CommonModule,
          LayoutRoutingModule,
          ReactiveFormsModule
     ],
     providers: [
          ApiService
     ]
})
export class LayoutModule { }
