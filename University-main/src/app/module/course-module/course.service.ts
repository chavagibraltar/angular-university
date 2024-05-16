import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course, StudyMode } from "src/model/course.model";


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5207/api/Course';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getCourseById(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Course>(url);
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<Course>(url, course);
  }

  deleteCourse(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}













// getCourses(): Observable<Course[]> {
  //   return of(APP_COURSES);
  // }

  // getCourseById(id: number): Observable<Course> {
    
  //   return of(APP_COURSES.find(c=>c.id==id));
  // }
  // getCourseById(id: number): Course {
    
  //   return (APP_COURSES.find(c=>c.id==id));
  // }

// export class CourseService {

//     constructor(private http: HttpClient) { }
//     c: Course = {
//         id: 17, name: "Swim - third", categoryId: 5, lessonsCount: 20, startDate: new Date(),
//         syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
//     }
//     // getCourseById(courseId: number): import('rxjs').Observable<Course> {
//     //     return this.http.get<Course>(`/api/courses/${courseId}`);
//     // }
//     getCourseById(courseId: number): Observable<Course> {

//         return of(this.c);
//     }
// }

