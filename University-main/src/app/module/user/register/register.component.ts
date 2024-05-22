import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // user: User;
  hide = true;
  registerForm: FormGroup;
  courseForm: FormGroup;
  isLecturer: boolean;// = false;
  errorMessage: string | null = null;
  userN: string = "";
  users: User[];
  user: User;
  @ViewChild('registerFormElement') registerFormElement: any;

  constructor(
    private userService: UserService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params) => {
      console.log("param: ", params.get('username'));
      this.userN = params.get('username');
      console.log("user: ", this.userN);
    })
    this.registerForm = new FormGroup({
      userName: new FormControl(this.userN, [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.courseForm = new FormGroup({
      course: new FormControl('', [Validators.required]),
    });
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.isLecturer = false;

  }
  onSubmit() {
    console.log("register");
    setInterval(() => { }, 700);
    if (this.registerForm.invalid || (this.courseForm.invalid && this.isLecturer == true)) {
      console.log("register");
      return;
    }
    const userName = this.registerForm.value.userName;
    const address = this.registerForm.value.address;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;


    console.log("username: ", userName);
    console.log("password:", password);

    // בודק האם קיים מרצה/משתמש בשם/כתובת מייל/סיסמא זו
    this.userService.getLecturers().subscribe({
      next: (data: User[]) => {
        let currentLecturer: User = data.find((x: User) => x.name == userName);
        if (currentLecturer) {
          console.log("lecturer name exists - yes");
          // הודעת שגיאה
          alert(`The name: ${userName} is already exists! please choose another name.`);
          return;
        } else {
          currentLecturer = data.find((x: User) => x.email == email);
          if (currentLecturer) {
            console.log("lecturer email exists - yes");
            // הודעת שגיאה
            alert(`The email: ${email} is already exists! please choose another email.`);
            return;
          } else {
            currentLecturer = data.find((x: User) => x.password == password);
            if (currentLecturer) {
              console.log("lecturer password exists - yes");
              // הודעת שגיאה
              alert(`The password: ${password} is already exists! please choose another password.`);
              return;
            } else {
              let currentUser: User = this.users.find(x => x.name == userName);
              if (currentUser) {
                console.log("lecturer name exists - yes");
                // הודעת שגיאה
                alert(`The name: ${userName} is already exists! please choose another name.`);
                return;
              } else {
                currentUser = this.users.find((x: User) => x.email == email);
                if (currentUser) {
                  console.log("user email exists - yes");
                  // הודעת שגיאה
                  alert(`The email: ${email} is already exists! please choose another email.`);
                  return;
                } else {
                  currentUser = this.users.find((x: User) => x.password == password);
                  if (currentUser) {
                    console.log("user password exists - yes");
                    // הודעת שגיאה
                    alert(`The password: ${password} is already exists! please choose another password.`);
                    return;
                  }
                  else {
                    if (this.isLecturer == true) {
                      console.log("lecturer - yes aaaaaaaaaaaaaaa");
                      const course = this.courseForm.value.course;
                      this.user = {
                        id: 0, name: userName, address: address, email: email, password: password, isLecturer: true
                      };
                      this.userService.addLecturer(this.user).subscribe({
                        next: (data) => {
                          console.log("lecturer - yes");
                          // ההודעה למשתמש על הצלחת ההוספה של המרצה
                          alert(`User named ${userName} successfully registered as a lecturer`);
                          sessionStorage.setItem("IsLecturer", JSON.stringify(true));
                          sessionStorage.setItem("User", JSON.stringify(this.user));
                          sessionStorage.setItem("CourseIdForLecturer", JSON.stringify(course));
                          this.router.navigate(['/course/all']);
                        },
                        error: (error) => {
                          alert(`User named ${userName} was not successfully registered as a lecturer`);
                        }
                      });
                    } else {
                      this.user = {
                        id: 0, name: userName, address: address, email: email, password: password, isLecturer: false
                      };
                      this.userService.addUser(this.user).subscribe({
                        next: (data) => {
                          console.log("user - yes");
                          // ההודעה למשתמש על הצלחת ההוספה של המשתמש
                          alert(`User named ${userName} successfully registered as a user`);
                          sessionStorage.setItem("IsLecturer", JSON.stringify(false));
                          sessionStorage.setItem("User", JSON.stringify(data));
                          this.router.navigate(['/course/all']);
                        },
                        error: (error) => {
                          alert(`User named ${userName} was not successfully registered`);
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }
      },
      error: (error) => {
        alert(`error: ${error}`);
      }
    });
  }

  onBackClick(): void {
    this.router.navigate(['/user/login']);
  }

  onChangeIsLecturer() {
    this.isLecturer = !this.isLecturer;
  }
}













































//     // .subscribe({
//     //   next: () => {
//     //     this.router.navigate(['/courses']);
//     //   },
//     //   error: (error) => {
//     //     if (error.status === 401) {
//     //       this.errorMessage = 'Invalid credentials.';
//     //     } else {
//     //       this.errorMessage = 'An error occurred during login.';
//     //     }
//     //   }
//     // });

//     // :אם הצליח
//     {
//       alert(`User named ${userName} successfully registered`)
//       // :אם מרצה
//       {
//         this.router.navigate(['/course/all', userName]);//וכן להעביר האם מרצה = אמת
//       }
//       {
//         // :אם לא מרצה
//         this.router.navigate(['/course/all', userName]);//וכן להעביר האם מרצה = שקר
//       }
//     }
//     // :אם לא הצליח
//     {
//       alert(`User named ${userName} was not successfully registered`)
//     }




//     // בדוק אם הסיסמא נכונה
//     if (password == currentLecturer.password) {
//       console.log("correct password - yes");
//       console.log("lecturer - yes");
//       sessionStorage.setItem("IsLecturer", JSON.stringify(true));
//       sessionStorage.setItem("User", JSON.stringify(currentLecturer));
//       this.router.navigate(['/course/all']);
//     }
//     else {
//       // סיסמא שגויה
//       console.log("correct password - no");
//       this.errorMessage = 'wrong password';
//       if (confirm(`Sorry, you entered a wrong password! would you like to try again? - (yes) or you want to register? - (no)`)) {
//         // if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
//         console.log("confirm try again - yes");
//         // this.router.navigate(['user/register'], { queryParams: { username: userName } });
//         // אפשרות הקשה נוספת
//       } else {//אולי מיותר...
//         console.log("confirm register - yes");
//         this.router.navigate(['/user/register']);
//         // this.router.navigate(['/user/register', userName]);
//       }
//     }
//   }
//         else {
//   // המשתמש אינו מרצה
//   let currentUser = this.users.find(x => x.name == userName);
//   if (currentUser) {
//     console.log("user exists - yes");
//     // בדוק אם הסיסמא נכונה
//     if (password == currentUser.password) {
//       console.log("correct password - yes");
//       console.log("lecturer - no");
//       sessionStorage.setItem("IsLecturer", JSON.stringify(false));
//       sessionStorage.setItem("User", JSON.stringify(currentUser));
//       // העבר את המשתמש לדף הראשי
//       this.router.navigate(['/course/all']);
//     } else {
//       // סיסמא שגויה
//       console.log("correct password - no");
//       this.errorMessage = 'wrong password';
//       if (confirm(`Sorry, you entered a wrong password! would you like to try again? - (yes) or you want to register? - (no)`)) {
//         // if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
//         console.log("confirm try again - yes");
//         // this.router.navigate(['user/register'], { queryParams: { username: userName } });
//         // אפשרות הקשה נוספת
//       } else {//אולי מיותר...
//         console.log("confirm register - yes");
//         this.router.navigate(['/user/register']);
//         // this.router.navigate(['/user/register', userName]);
//       }
//     }
//   }
//   else {
//     // אין משתמש בשם זה
//     console.log("user exists - no");
//     // שאל את המשתמש אם הוא רוצה להירשם
//     if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
//       console.log("confirm register - yes");
//       // this.router.navigate(['user/register'], { queryParams: { username: userName } });
//       this.router.navigate(['/user/register', userName]);
//     } else {//אולי מיותר...
//       console.log("confirm register - no");
//       this.router.navigate(['/course/all']);
//     }
//   }
// }
//     });



// // בודק האם כבר קיים משתמש בשם זה
// if (isUserNameExists(userName)) {

//   alert(`user named ${userName} is already exists`)//) {
//   //   console.log("confirm register - yes");
//   //   this.router.navigate(['/register'], { queryParams: { username: userName } });
//   // }
//   //else {//אולי מיותר...
//   // console.log("confirm register - no");
//   // this.router.navigate(['course/all']);
//   //}
//   // // בדוק אם הסיסמא נכונה
//   // console.log("user exists - yes");
//   // if (correctPassword(userName, password)) {
//   //   console.log("correct password - yes");
//   //   //בודק האם הוא מרצה
//   //   if (isLecturer(userName)) {
//   //     console.log("lecturer - yes");
//   //     // העבר את המשתמש לדף הראשי
//   //     sessionStorage.setItem("IsLecturer", JSON.stringify(true))
//   //   } else {
//   //     console.log("lecturer - no");
//   //     sessionStorage.setItem("IsLecturer", JSON.stringify(false))
//   //   }
//   //   sessionStorage.setItem("userName", JSON.stringify(userName))
//   //   this.router.navigate(['course/all']);
//   // } else {
//   //   console.log("correct password - no");
//   //   this.errorMessage = 'wrong password';
//   // }
// } else {
//   // console.log("user exists - no");
//   // // שאל את המשתמש אם הוא רוצה להירשם
//   // if (confirm(`User named ${userName} does not exists. Would you like to register?`)) {
//   //   console.log("confirm register - yes");
//   //   this.router.navigate(['/register'], { queryParams: { username: userName } });
//   // }
//   // else {//אולי מיותר...
//   //   console.log("confirm register - no");
//   //   this.router.navigate(['course/all']);
//   // }
//   const user: User = {
//     id: 0, name: userName, address: address, email: email, password: password, isLecturer: false
//   }
//   this.userService.register(user)
//   // .subscribe({
//   //   next: () => {
//   //     this.router.navigate(['/courses']);
//   //   },
//   //   error: (error) => {
//   //     if (error.status === 401) {
//   //       this.errorMessage = 'Invalid credentials.';
//   //     } else {
//   //       this.errorMessage = 'An error occurred during login.';
//   //     }
//   //   }
//   // });

//   // :אם הצליח
//   {
//     alert(`User named ${userName} successfully registered`)
//     // :אם מרצה
//     {
//       this.router.navigate(['/course/all', userName]);//וכן להעביר האם מרצה = אמת
//     }
//     {
//       // :אם לא מרצה
//       this.router.navigate(['/course/all', userName]);//וכן להעביר האם מרצה = שקר
//     }
//   }
//   // :אם לא הצליח
//   {
//     alert(`User named ${userName} was not successfully registered`)
//   }
// }
//   }

// enter() {
//   const user: User = {
//     id: 0, name: this.userName, address: "", email: "", password: this.userPassword, isLecturer: false
//   }
//   this.userService.login(user).subscribe(
//     (res) => {
//       // Swal.fire({ title: 'Welcome ' + user.name });
//       sessionStorage.setItem('userId', res.id.toString());
//       if (res.isLecturer)
//         sessionStorage.setItem('isLecturer', res.isLecturer.toString());
//       this.router.navigate(['course/all']);
//     },
//     // (error) => {
//     //   if (error.status === 404)
//     //     Swal.fire({
//     //       title: "Username doesn't exist", text: "Do you want to register?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes"
//     //     }).then((result) => {
//     //       if (result.isConfirmed)
//     //         this.router.navigate([`user/register`], { queryParams: { name: this.userName } });
//     //       else
//     //         this.userPassword = this.userName = '';
//     //     });
//     //   else if (error.status === 401) {
//     //     Swal.fire({ title: "Wrong password", icon: "error" });
//     //     this.userPassword = '';
//     //   }
//     //   console.error("error in login", error);
//     // }
//   );
// }
// login(): void {
//   // בדוק אם המשתמש קיים
//   if (userExists(this.userName)) {
//     // בדוק אם הסיסמא נכונה
//     if (correctPassword(this.userName, this.userPassword)) {
//       //בודק האם הוא מרצה

//       // העבר את המשתמש לדף הראשי
//       this.router.navigate(['/']);
//     } else {
//       this.errorMessage = 'סיסמא שגויה';
//     }
//   } else {
//     // שאל את המשתמש אם הוא רוצה להירשם
//     if (confirm(`משתמש בשם ${this.userName} לא קיים. האם תרצה להירשם?`)) {
//       this.router.navigate(['/register'], { queryParams: { username: this.userName } });
//     }
//   }
// }


// function isUserNameExists(userName: string): boolean {
//   // בדוק במערכת האם קיים משתמש בשם זה



//   return false; // דמה
// }

// function correctPassword(userName: string, password: string): boolean {
//   // בדוק במערכת אם הסיסמא נכונה
//   return true; // דמה
// }
// function isLecturer(userName: string): boolean {
//   // בדוק במערכת אם המשתמש הוא מרצה
//   return true; // דמה
// }

