import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Category } from 'src/model/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { CategoryService } from '../category.service';
import { UserService } from '../../user/user.service';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css'],

})
export class AddEditCourseComponent implements OnInit {
  addEditCourseForm: FormGroup;
  syllabusForm: FormGroup;
  categories: Category[] = [];
  lecturers: User[] = [];
  courseId: number | null = null;
  isEditing: boolean = false;
  // syllabusItems: string[] = [];
  syllabusItems: string[] = ["aa", "bb", "cc"];
  // studyModeOptions: string[] = ['פרונטלי', 'זום'];
  image = '/assets/courses-images/camera.jpg';
  id: number = 999;
  errorMessage: string | null = null;
  isLecturer: boolean;

  @ViewChild('addEditCourseFormElement') addEditCourseFormElement: any;

  constructor(
    private courseService: CourseService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.initForm();
    this.getCategories();
    this.getLecturers();
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = +params.get('id');
      if (this.courseId) {
        this.isEditing = true;
        this.getCourseDetails();
      }
    });
  }

  initForm(): void {
    console.log("initForm");
    this.addEditCourseForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      lessonsCount: new FormControl('', [Validators.required, Validators.min(1)]),
      startDate: new FormControl('', [Validators.required]),
      // syllabus: this.fb.array(
      //   (this.course?.syllabus || []).map((item) => this.fb.control(item))
      // ),
      syllabus: new FormControl(this.syllabusItems),
      studyMode: new FormControl('', [Validators.required]),
      lecturerId: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  getLecturers(): void {
    this.userService.getLecturers().subscribe(lecturers => {
      this.lecturers = lecturers;
    });
  }

  getCourseDetails(): void {
    console.log("getCourseDetails");
    if (!this.courseId) {
      return;
    }

    this.courseService.getCourseById(this.courseId!).subscribe(course => {
      this.syllabusItems = course.syllabus;
      this.addEditCourseForm.patchValue({
        id: course.id,
        name: course.name,
        description: course.description,
        categoryId: course.categoryId,
        amount: course.amount,
        startDate: course.startDate,
        syllabus: course.syllabus,
        studyMode: course.studyMode,
        lecturerId: course.lecturerId,
        image: course.image
      });
    });
  }

  addSyllabusItem(): void {
    this.syllabusItems.push('');
  }

  removeSyllabusItem(index: number): void {
    if (this.syllabusItems.length > 1) {
      this.syllabusItems.splice(index, 1);
    }
  }

  onSave(): void {
    console.log("onSave");

    if (this.addEditCourseForm.invalid) {
      return;
    }
    console.log("onSave - after");

    const courseData = {
      id: this.addEditCourseForm.value.id,
      name: this.addEditCourseForm.value.name,
      description: this.addEditCourseForm.value.description,
      categoryId: this.addEditCourseForm.value.categoryId,
      amount: this.addEditCourseForm.value.amount,
      startDate: this.addEditCourseForm.value.startDate,
      syllabus: this.syllabusItems,
      studyMode: this.addEditCourseForm.value.studyMode,
      lecturerId: this.addEditCourseForm.value.lecturerId,
      image: this.addEditCourseForm.value.image
    };
    if (this.isEditing) {
      this.courseService.updateCourse(courseData).subscribe({
        next: () => {
          Swal.fire('The course has been successfully updated!');
          this.router.navigate(['course/all']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          Swal.fire('There is an error updating the course::', error.message);
        }
      });
    } else {
      this.courseService.createCourse(courseData).subscribe({
        next: () => {
          Swal.fire('The course was successfully created!');
          this.router.navigate(['/course/all']);
        },
        error: (error) => {
          console.log("onsave - courseData: ", courseData)
          this.errorMessage = error.message; 
          Swal.fire('Error creating the course:', error.message);
        }
      });
    }
  }
  onCancel(): void {
    console.log("onCancel");
    this.router.navigate(['course/all']);
  }
}  










  // saveCourse(): void {
  //   if (this.course.name === '' || this.course.categoryId === 0 || this.course.numberOfLessons === 0 || this.course.startDate === null || this.learningMode === '' || this.course.lecturerId === 0) {
  //     this.sweetAlert2Service.showAlert('שגיאה', 'אנא מלא את כל השדות', 'error');
  //     return;
  //   }

  //   this.course.syllabus = this.syllabus.join(',');
  //   if (this.course.courseId === 0) {
  //     // Adding new course
  //     this.courseService.addCourse(this.course).subscribe(() => {
  //       this.sweetAlert2Service.showAlert('הצלחה', 'הקורס נוסף בהצלחה', 'success');
  //       this.router.navigate(['/all-courses']);
  //     });
  //   } else {
  //     // Editing existing course
  //     this.courseService.updateCourse(this.course).subscribe(() => {
  //       this.sweetAlert2Service.showAlert('הצלחה', 'הקורס עודכן בהצלחה', 'success');
  //       this.router.navigate(['/all-courses']);
  //     });
  //   }
  // }



  // private loadCategories(): void {
  //   this.categoryService.getCategories().subscribe((categories) => {
  //     this.categories = categories;
  //   });
  // }

  // private loadLecturers(): void {
  //   this.lecturerService.getLecturers().subscribe((lecturers) => {
  //     this.lecturers = lecturers;
  //   });
  // }


// function provideNativeDateAdapter(): import("@angular/core").Provider {
//   throw new Error('Function not implemented.');
// }

