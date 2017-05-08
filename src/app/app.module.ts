import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { flyInOut } from './router.animations';
import { routes } from './app.route';
import { AuthSession, GuardActivate, ConfigService, FilterPipe } from './share';
import { NavbarComponent, SidebarComponent, FooterComponent } from './components/_menu';
import { LoginService, UploadService, RegisterService, UserService, OrderService } from './services';
import { LoginComponent, 
        OrdersComponent, 
        UploadComponent, 
        RegisterComponent, 
        DialogComponent,
        UserComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    OrdersComponent,
    UploadComponent,
    RegisterComponent,
    DialogComponent,
    UserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [
    ConfigService,
    GuardActivate, 
    AuthSession, 
    LoginService, 
    UploadService,
    RegisterService,
    UserService,
    OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
