import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { flyInOut } from './router.animations';
import { routes } from './app.route';
import { AuthSession, GuardActivate, ConfigService } from './share';
import { NavbarComponent, SidebarComponent, FooterComponent } from './components/_menu';
import { LoginService, UploadService, RegisterService, UserService } from './services';
import { LoginComponent, 
        OrdersComponent, 
        UploadComponent, 
        RegisterComponent, 
        DialogComponent,
        UserComponent } from './components';

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
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
