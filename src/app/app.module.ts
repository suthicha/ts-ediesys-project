import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent, OrdersComponent, UploadComponent, RegisterComponent, DialogComponent } from './components';
import { LoginService, UploadService, RegisterService } from './services';
import { AuthSession, GuardActivate, ConfigService } from './share';
import { NavbarComponent, SidebarComponent, FooterComponent } from './components/_menu';
import { routes } from './app.route';

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
    DialogComponent
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
    RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
