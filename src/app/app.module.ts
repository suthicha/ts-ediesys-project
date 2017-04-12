import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertComponent, LoginComponent, OrdersComponent, UploadComponent } from './components';
import { AlertService, LoginService, UploadService } from './services';
import { AuthSession, GuardActivate } from './share';
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
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    GuardActivate, 
    AuthSession, 
    AlertService, 
    LoginService, 
    UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
