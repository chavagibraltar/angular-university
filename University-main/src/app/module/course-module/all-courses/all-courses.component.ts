import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/model/course.model';
import { CourseService } from '../course.service';
import { Category } from 'src/model/category.model';
import { CategoryService } from '../category.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {

  courses: Course[];
  categories: Category[] = [];
  filteredCourses: Course[] = []; 
  courseFilterForm: FormGroup;

  constructor(private courseService: CourseService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCourses();
    this.initForm();
  }

  initForm(): void {
    this.courseFilterForm = new FormGroup({
      category: new FormControl(null),
      courseName: new FormControl(''),
      studyMode: new FormControl(null)
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe((courses) => (this.courses = courses, this.filteredCourses = courses));
  }

  filterCourses(): void {
    this.filteredCourses = this.courses;
    const selectedCategory: number = this.courseFilterForm.get('category').value;
    const selectedCourseName = this.courseFilterForm.get('courseName').value.toLowerCase();
    const selectedStudyMode = this.courseFilterForm.get('studyMode').value;
    
    if (selectedCategory) {
      if (selectedCategory != -1)
        this.filteredCourses = this.filteredCourses.filter(course => course.categoryId == selectedCategory);
    }

    if (selectedCourseName) {
      this.filteredCourses = this.filteredCourses.filter(course => course.name.toLowerCase().includes(selectedCourseName.toLowerCase()));
    }

    if (selectedStudyMode) {
      if (selectedStudyMode != 0)
        this.filteredCourses = this.filteredCourses.filter(course => course.studyMode == selectedStudyMode);
    }
  }
}
























// courses: Course[] = [
//   {
//     id: 1, name: "photography", categoryId: 1, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 2, name: "photoshop", categoryId: 1, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 3, name: "new-born", categoryId: 1, lessonsCount: 15, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 4, name: "computer-programing C#", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 5, name: "computer-programing C++", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 6, name: "computer-programing C", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 7, name: "computer-programing Java", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 3, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 8, name: "computer-programing Python", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 3, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 9, name: "computer-programing SQL", categoryId: 2, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 4, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 10, name: "Flowers", categoryId: 3, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 5, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 11, name: "Balloons", categoryId: 3, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 6, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 12, name: "Drawing", categoryId: 3, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 7, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 13, name: "Gittar", categoryId: 4, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 8, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 14, name: "trumpet", categoryId: 4, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 8, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 15, name: "Swim - first", categoryId: 5, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 16, name: "Swim - second", categoryId: 5, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 17, name: "Swim - third", categoryId: 5, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 18, name: "Math", categoryId: 6, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 10, image: "../../../assets/courses-images/english.jpg"
//   },
//   {
//     id: 19, name: "English", categoryId: 6, lessonsCount: 20, startDate: new Date(),
//     syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Zoom, lecturerId: 11, image: "../../../assets/courses-images/english.jpg"
//   }
// ]
// courses: Course[] = [
//   {
//     id: 1,
//     name: 'קורס פיתוח תוכנה',
//     image: "https://placehold.co/200x150",
//     lessonsCount: 12,
//     studyMode: 0//'Zoom'
//   },
//   {
//     id: 2,
//     name: 'עיצוב גרפי',
//     image: "https://placehold.co/200x150",
//     lessonsCount: 10,
//     studyMode: 1//'Frontal'
//   },
//   // ... קורסים נוספים
// ];


// @ViewChild(MatAccordion) accordion: MatAccordion;
// @ViewChild(MatButtonToggleGroup) instructionModeToggle: MatButtonToggleGroup;

// courses: Course[];
// filteredCourses: Course[];
// categories: Category[];
// categoriesFilter: number;
// filterValue: string = '';

// constructor(private courseService: CourseService, private categoryService: CategoryService) { }

// ngOnInit(): void {
//   this.courseService.getCourses().subscribe(courses => {
//     this.courses = courses;
//     this.filteredCourses = courses;
//   });
//   this.categoryService.getCategories().subscribe(categories => this.categories = categories);
// }

// filterCourses() {
//   // console.log(this.filterValue);
//   const instructionMode = this.instructionModeToggle.value;
//   // console.log(instructionMode);
//   // console.log(typeof (instructionMode));
//   console.log("selectedCategory", this.categoriesFilter);

//   this.filteredCourses = this.courses.filter(course =>
//     course.name.toLowerCase().includes(this.filterValue.toLowerCase())
//     && (this.categoriesFilter == undefined || course.categoryId == this.categoriesFilter)
//     && (instructionMode == 'all' || instructionMode == undefined || course.instructionMode == instructionMode)
//   );
// }

// printSelectedValue() {
//   console.log(this.fontStyleToggle.value);
// }
// filterCoursesByCategories() {
//   console.log(this.categoriesForm.value);
//   console.log(typeof (this.categoriesForm.value));
//   const selectedCategory: number = +this.categoriesForm.value;
//   this.filteredCourses = this.courses.filter(course =>

//   );
// }


