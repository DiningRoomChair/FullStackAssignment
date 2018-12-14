import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsComponent } from './rentals/rentals.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';


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
        path: 'admin-view',
        component: AdminViewComponent
    },
    {
        path: 'admin-view/:id',
        component: AdminEditComponent
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