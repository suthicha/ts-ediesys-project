import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, OrdersComponent, UploadComponent, RegisterComponent } from './components';
import { GuardActivate } from './share';

export const router: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'upload', component: UploadComponent, canActivate: [ GuardActivate ]},
    { path: '**', redirectTo: ''}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);