import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './module/course-module/course.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './module/user/user.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CourseModule, BrowserAnimationsModule, 
    MatTabsModule, RouterModule, FormsModule, UserModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
