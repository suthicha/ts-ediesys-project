import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardActivate } from './share';
import { LoginComponent, 
        OrdersComponent, 
        UploadComponent, 
        RegisterComponent,
        UserComponent } from './components';


export const router: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'upload', component: UploadComponent, canActivate: [ GuardActivate ]},
    { path: 'user', component: UserComponent },
    { path: '**', redirectTo: ''}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);