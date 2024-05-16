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
  
  constructor(
    private router: Router,
    private userService: UserService,
    private categoryService: CategoryService,
    private elementRef: ElementRef
    ) { }
    ngOnInit(): void {
      
      console.log("course id: ", this?.course?.id);
      console.log("course - id: ", this?.course?.id, "name: ", this?.course?.name, "category id: ", this?.course?.lecturerId, "lec id: desc: ", this?.course?.description);
      this.getLecturer();
      this.getCategory();
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
      console.log("category id: ", this.category?.id);
      console.log("category Name: ", this.category?.name);
      console.log("category iconRouting: ", this.category?.iconRouting);
    }
    isLoggedIn(): boolean {
      return !!sessionStorage.getItem('User');
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;
  // imageUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg'; // נתיב ברירת מחדל לתמונה
  // img = '..../assets/courses-images/camera.jpg'
  // @ViewChild('cardAvatar') cardAvatar: ElementRef;
  // export class CourseCardComponent {
    //   @Input()
    //   course: Course;
    
    //   checkDate() {
      //     const nextWeek = new Date;
      //     nextWeek.setDate(nextWeek.getDate() + 7)
      //     return this.course.startDate >= new Date && this.course.startDate <= nextWeek;
      //   }
      // }
      