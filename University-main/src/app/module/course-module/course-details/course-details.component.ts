import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  courseId: number | null;
  course: Course;
  category: Category;
  lecturer: User | undefined;
  studyMode: string;
  isNextWeek: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private categoryService: CategoryService,
    private userService: UserService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = +params.get('id');
    })
    this.courseService.getCourseById(this.courseId).subscribe((c: Course) => {
      this.course = c;
      if (this.course) {
        this.getCategory();
        this.getLecturer();
        this.convertStudyMode();
        this.isNextWeek = this.isStartDateInCurrentWeek();
        // this.getCategoryIcon(this?.course?.categoryId);
        // this.elementRef.nativeElement.querySelector('.example-header-image').style.backgroundImage = `url(${this.category?.iconRouting})`;
      }
    });
  }

  ngOnDestroy(): void {
    console.log("details: Method not implemented.");
    // throw new Error('Method not implemented.');
  }

  getCategory(): void {
    this.categoryService.getCategoryById(this.course.categoryId).subscribe((category: Category) => {
      this.category = category;
    });
  }

  getLecturer(): void {
    this.userService.getLecturerById(this.course.lecturerId).subscribe((lecturer: User) => {
      this.lecturer = lecturer;
    });
  }

  isStartDateInCurrentWeek(): boolean {
    const date = new Date(this.course.startDate);

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
    if(JSON.parse(sessionStorage?.getItem('IsLecturer'))){
      let userId: number;
      const userIdStorage = sessionStorage.getItem('UserId');
      userId = JSON.parse(userIdStorage);
      return this.lecturer?.id == userId;
    }
    return false;
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

