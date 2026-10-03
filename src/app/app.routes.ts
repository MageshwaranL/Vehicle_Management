import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehicleMasterComponent } from './pages/vehicle-master/vehicle-master.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CustomerListingComponent } from './pages/customer-listing/customer-listing.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'vehicles',
                component:VehicleMasterComponent
            },
            {
                path:'bookings',
                component: BookingComponent
            },
            {
                path:'customers',
                component:CustomerListingComponent
            }

        ]
    },
    
];
