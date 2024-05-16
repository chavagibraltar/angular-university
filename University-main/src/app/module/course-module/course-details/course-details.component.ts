import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { CategoryService } from '../category.service';
import { Course } from 'src/model/course.model';
import { Category } from 'src/model/category.model';
import { UserService } from '../../user/user.service';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  courseId: number | null;
  course: Course;
  category: Category;
  lecturer: User | undefined;
  studyMode: string;
  // isLecturer: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private categoryService: CategoryService,
    private userService: UserService,
    private elementRef: ElementRef
  ) { console.log("click") }

  ngOnInit(): void {
    console.log("details");
    this.route.paramMap.subscribe((params) => {
      console.log("param: ", params.get('id'));
      this.courseId = +params.get('id');
    })
    this.courseService.getCourseById(this.courseId).subscribe((c: Course) => {
      this.course = c;
    });
    if (this.course) {
      this.getCategory();
      this.getLecturer();
      // this.getCategoryIcon(this?.course?.categoryId);
      // this.elementRef.nativeElement.querySelector('.example-header-image').style.backgroundImage = `url(${this.category?.iconRouting})`;
      this.convertStudyMode();
    }
    // this.checkIsLecturer();
  }
  ngOnDestroy(): void {
    console.log("details: Method not implemented.");
    // throw new Error('Method not implemented.');
  }

  getCategory(): void {
    this.categoryService.getCategoryById(this.course.categoryId).subscribe((category: Category) => {
      this.category = category;
    });
    console.log("category id: ", this.category.id);
    console.log("category Name: ", this.category.name);
    console.log("category iconRouting: ", this.category.iconRouting);
  }

  getLecturer(): void {

    this.userService.getLecturerById(this.course.lecturerId).subscribe((lecturer: User) => {

      this.lecturer = lecturer;
    });
    console.log("lecturer Id: ", this.lecturer.id);
    console.log("lecturer Name: ", this.lecturer.name);
  }

  isStartDateInCurrentWeek(date: Date): boolean {
    // קבלת התאריך הנוכחי
    const today = new Date();

    // חישוב תחילת השבוע הנוכחי
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());

    // חישוב סוף השבוע הנוכחי
    const endOfWeek = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 6);

    // בדיקה האם התאריך המתקבל נמצא בין תחילת וסוף השבוע הנוכחי
    return date >= startOfWeek && date <= endOfWeek;
  }

  convertStudyMode() {
    if (this.course.studyMode == 1)
      this.studyMode = "Frontal";
    else
      this.studyMode = "Digital";
  }

  isLecturer(): boolean {
    return JSON.parse(sessionStorage.getItem('isLecturer'));
  }
}
































//constructor(private courseService: CourseService) { console.log("click")}
// ngOnInit(): void {
//   this.loadCourse();
// }

// private loadCourse(): void {
//   this.courseService.getCourseById(this.courseId)
//     .subscribe(course => this.course = course);
// }

// function getCourseById(courseId: number): Course {
//   throw new Error('Function not implemented.');
// }

