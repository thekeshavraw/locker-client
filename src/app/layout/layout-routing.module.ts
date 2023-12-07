import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../views/shared/home/home.component';
import { DashboardComponent } from '../views/secure/dashboard/dashboard.component';
import { SignupComponent } from '../views/public/signup/signup.component';
import { LoginComponent } from '../views/public/login/login.component';
import { AboutComponent } from '../views/public/about/about.component';
import { ContactComponent } from '../views/shared/contact/contact.component';
import { CategoryComponent } from '../views/main/category/category.component';
import { ItemsComponent } from '../views/main/items/items.component';
import { ItemDetailsComponent } from '../views/main/item-details/item-details.component';
import { ViewComponent } from '../views/main/view/view.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutComponent,
          children: [
               {
                    path: '',
                    component: HomeComponent
               },
               {
                    path: 'home',
                    component: HomeComponent
               },
               {
                    path: 'dashboard',
                    component: DashboardComponent
               },
               {
                    path: 'signup',
                    component: SignupComponent
               },
               {
                    path: 'login',
                    component: LoginComponent
               },
               {
                    path: 'about',
                    component: AboutComponent
               },
               {
                    path: 'contact',
                    component: ContactComponent
               },
               {
                    path: 'category',
                    component: CategoryComponent
               },
               {
                    path: 'items',
                    component: ItemsComponent
               },
               {
                    path: 'item/detail',
                    component: ItemDetailsComponent
               },
               {
                    path: 'view',
                    component: ViewComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutRoutingModule { }
