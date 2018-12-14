import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsComponent } from './rentals/rentals.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { AdminAddComponent } from './admin-add/admin-add.component';

const routes: Routes = [
    {
        path: '',
        component: RentalsComponent
    },
    {
        path: 'admin-login',
        component: AdminLoginComponent
    },
    {
        path: 'admin-view/customers',
        component: CustomersComponent
    },
    {
        path: 'admin-view/add',
        component: AdminAddComponent
    },
    {
        path: 'admin-view/:id',
        component: AdminEditComponent
    },
    {
        path: 'admin-view',
        component: AdminViewComponent
    },
    {
        path:'rentals/:id',
        component: RentalDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }