import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

const ROUTES: Routes = [
    { path: "", redirectTo: "all", pathMatch: 'full' },
    { path: "all", component: AllCoursesComponent },
    { path: "add", component: AddEditCourseComponent },
    { path: "edit/:id", component: AddEditCourseComponent },
    { path: "details/:id", component: CourseDetailsComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }
