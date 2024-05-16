import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
const ROUTES: Routes = [
  { path: "", redirectTo: "course", pathMatch: 'full' },
  // { path: "", redirectTo: "home", pathMatch: 'full' },
  // { path: "user", loadChildren: () => import('./module/user-module/user-routing.module').then(u => u.UserRoutingModule) },
  { path: "user", loadChildren: () => import('./module/user/user-routing.module').then(u => u.UserRoutingModule) },
  { path: "course", loadChildren: () => import('./module/course-module/course-routing.module').then(c => c.CourseRoutingModule) },
  { path: "home", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  // imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
