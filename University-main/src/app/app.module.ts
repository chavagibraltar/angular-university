import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './module/course-module/course.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './module/user-module/login/login.component';
// import { LogoutComponent } from './module/user-module/logout/logout.component';
// import { RegisterComponent } from './module/user-module/register/register.component';
// import { UserModule } from './module/user-module/user.module';
import { UserModule } from './module/user/user.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent, HomeComponent],// LoginComponent, LogoutComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, CourseModule, BrowserAnimationsModule, MatTabsModule, RouterModule, FormsModule, 
    // UserModule
    UserModule
  ], 
    //MatInputModule],
  providers: [],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  //standalone: true,
  bootstrap: [AppComponent]
})
export class AppModule { }
