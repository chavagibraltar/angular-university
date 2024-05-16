import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from "src/app/app-routing.module";
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseService } from "./course.service";
import { CategoryService } from "./category.service";
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { LecturerService } from "../user/lecturer.service";

// import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
    declarations: [AllCoursesComponent, CourseCardComponent, CourseDetailsComponent, AddEditCourseComponent],
    imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, MatCardModule,
        MatButtonModule, MatExpansionModule, MatIconModule, 
        MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule 
    ],
    providers: [CourseService, CategoryService, LecturerService],
    exports: []
})

export class CourseModule { }
