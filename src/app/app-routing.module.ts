import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsComponent } from './rentals/rentals.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';


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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }