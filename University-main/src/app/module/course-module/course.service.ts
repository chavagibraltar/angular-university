import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course, StudyMode } from "src/model/course.model";


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  COURSES: Course[] = [];

  private apiUrl = 'http://localhost:5207/api/Course';

  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.apiUrl);
  }
  getCourseById(id: number): Observable<Course> {
    if(id!=null){
      const url = `${this.apiUrl}/${id}`;
      return this._http.get<Course>(url);
    }
    else{
      console.log("undef");
      return of(null);
    }
  }
  createCourse(course: Course): Observable<Course> {
    return this._http.post<Course>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this._http.put<Course>(url, course);
  }

  deleteCourse(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.delete<void>(url);
  } 
}