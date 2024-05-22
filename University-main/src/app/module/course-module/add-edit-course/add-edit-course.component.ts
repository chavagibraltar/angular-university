import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { CourseService } from '../course.service';
import { Category } from 'src/model/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { CategoryService } from '../category.service';
import { UserService } from '../../user/user.service';
import { User } from 'src/model/user.model';
import { Course } from 'src/model/course.model';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css'],

})
export class AddEditCourseComponent implements OnInit {
  addEditCourseForm: FormGroup;
  categories: Category[] = [];
  lecturers: User[] = [];
  courseId: number | null = null;
  isEditing: boolean = false;
  image = '/assets/courses-images/camera.jpg';
  id: number = 999;
  errorMessage: string | null = null;
  isLecturer: boolean;
  course: Course;

  @ViewChild('addEditCourseFormElement') addEditCourseFormElement: any;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = +params.get('id');
      if (this.courseId) {
        this.isEditing = true;
        this.courseService.getCourseById(this.courseId).subscribe(course => {
          this.course = course;
          if (this.course) {
            this.initForm();
          }
        });
      }
      else {
        this.initForm();
      }
    });
    this.getCategories();
    this.getLecturers();
  }

  get syllabusAsFormArray() {
    return this.addEditCourseForm?.get('syllabus') as FormArray;
  }

  initForm(): void {
    this.addEditCourseForm = this.fb.group({
      id: new FormControl(this.course?.id),
      name: new FormControl(this.course?.name || '', [Validators.required]),
      description: new FormControl(this.course?.description || '', [Validators.required]),
      categoryId: new FormControl(this.course?.categoryId || '', [Validators.required]),
      amount: new FormControl(this.course?.amount || '', [Validators.required]),
      startDate: new FormControl(new Date(this.course?.startDate) || '', [Validators.required]),
      syllabus: this.fb.array(
        (this.course?.syllabus || [' ']).map((item) => this.fb.control(item))
      ),
      studyMode: new FormControl(this.course?.studyMode || '', [Validators.required]),
      lecturerId: new FormControl(this.course?.lecturerId || '', [Validators.required]),
      image: new FormControl(this.course?.image || '', [Validators.required])
    });
  }

  getCategories(): void {
    this.categoryService?.getCategories()?.subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (err) => {
        console.log("error: ", err)
      }
    });
  }

  getLecturers(): void {
    this.userService?.getLecturers()?.subscribe(lecturers => {
      this.lecturers = lecturers;
    });
  }

  addSyllabusItem(): void {
    this.syllabusAsFormArray.push(new FormControl(''));
  }

  removeSyllabusItem(index: number): void {
    this.syllabusAsFormArray.removeAt(index);
  }

  onInputDelete(event: Event, index: number) {
    const value = (event.target as HTMLInputElement).value;
    if (!value && this.syllabusAsFormArray.at(index).dirty)
      this.removeSyllabusItem(index);
  }

  onSyllabusKeyPress(event: KeyboardEvent, index: number) {
    const value = (event.target as HTMLInputElement).value;
    const lastSyllabusIndex = this.syllabusAsFormArray.length - 1;
    if (value && event.key === 'Enter') {
      if (index == lastSyllabusIndex)
        this.addSyllabusItem();
      this.syllabusAsFormArray.at(index + 1).markAsTouched();
      setTimeout(() => {
        const nextInput: HTMLElement = document.querySelector(
          `.form-field-syl:nth-child(${index + 2}) input`
        );
        nextInput.focus();
      });
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
      syllabus: this.addEditCourseForm.value.syllabus,
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
