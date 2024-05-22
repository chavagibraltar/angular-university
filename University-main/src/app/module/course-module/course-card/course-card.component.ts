import { Component, Input, Output, EventEmitter, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Course, StudyMode } from 'src/model/course.model';
import { Category } from 'src/model/category.model';
import { User } from 'src/model/user.model';
import { CategoryService } from '../category.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})


export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  panelOpenState = false;
  lecturer: User;
  category: Category;
  lecturerName: string | undefined;
  categoryIcon: string | undefined;
  imageUrl = '/assets/courses-images/camera.jpg'; // נתיב ברירת מחדל לתמונה
  studyModeIcon: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private categoryService: CategoryService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.getLecturer();
    this.getCategory();
    this.setStudyMode();
    this.elementRef.nativeElement.querySelector('.example-header-image').style.backgroundImage = `url(${this.category?.iconRouting})`;
  }

  onCardClicked(): void {
    this.router.navigate(['course/details', this?.course?.id]);
  }

  getLecturer(): void {
    this.userService.getLecturerById(this?.course?.lecturerId).subscribe((lecturer: User) => {
      this.lecturerName = lecturer?.name;
      this.lecturer = lecturer;
    });
  }

  getCategory(): void {
    this.categoryService.getCategoryById(this?.course?.lecturerId).subscribe((category: Category) => {
      this.categoryIcon = category?.iconRouting;
      this.category = category;
    });
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('User');
  }

  setStudyMode() {
    if (this.course.studyMode == 1) {
      this.studyModeIcon = "people"
      this.studyModeIcon = "Frontal"
    }
    else {
      this.studyModeIcon = "videocam"
      this.studyModeIcon = "Digital"
    }
  }
}
