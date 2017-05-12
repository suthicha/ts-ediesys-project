import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardActivate } from './share';
import { LoginComponent, 
        OrdersComponent, 
        UploadComponent, 
        RegisterComponent,
        UserComponent } from './components';


export const router: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'orders', component: OrdersComponent, canActivate: [ GuardActivate ]},
    { path: 'upload', component: UploadComponent, canActivate: [ GuardActivate ]},
    { path: 'user', component: UserComponent, canActivate: [ GuardActivate ] },
    { path: '', component: OrdersComponent, canActivate: [GuardActivate] },
    { path: '**', component: OrdersComponent, canActivate: [GuardActivate] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);