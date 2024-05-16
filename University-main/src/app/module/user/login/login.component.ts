import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/model/user.model';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  // userName: string;
  // userPassword: string;
  // formSubmitted = false;
  hide = true;
  loginForm: FormGroup;
  errorMessage: string | null = null;
  users: User[];
  @ViewChild('loginFormElement') loginFormElement: any;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }
  onSubmit() {
    console.log("login");
    if (this.loginForm.invalid) {
      return;
    }
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    console.log("username: ", userName);
    console.log("password:", password);   
    // בודק האם קיים מרצה בשם זה
    this.userService.getLecturers().subscribe((lecturersData: User[]) => {
      let currentLecturer: User = lecturersData.find((x: User) => x.name == userName);
      if (currentLecturer) {
        console.log("lecturer exists - yes");
        // בדוק אם הסיסמא נכונה
        if (password == currentLecturer.password) {
          console.log("correct password - yes");
          console.log("lecturer - yes");
          sessionStorage.setItem("IsLecturer", JSON.stringify(true));
          sessionStorage.setItem("User", JSON.stringify(currentLecturer));
          this.router.navigate(['/course/all']);
        }
        else {
          // סיסמא שגויה
          console.log("correct password - no");
          this.errorMessage = 'wrong password';
          if (confirm(`Sorry, you entered a wrong password! would you like to try again? - (yes) or you want to register? - (no)`)) {
            console.log("confirm try again - yes");
            // אפשרות הקשה נוספת
          } else {
            console.log("confirm register - yes");
            this.router.navigate(['/user/register']);
          }
        }
      }
      else {
        // המשתמש אינו מרצה
        let currentUser = this.users.find(x => x.name == userName);
        if (currentUser) {
          console.log("user exists - yes");
          // בדוק אם הסיסמא נכונה
          if (password == currentUser.password) {
            console.log("correct password - yes");
            console.log("lecturer - no");
            sessionStorage.setItem("IsLecturer", JSON.stringify(false));
            sessionStorage.setItem("User", JSON.stringify(currentUser));
            // העבר את המשתמש לדף הראשי
            this.router.navigate(['/course/all']);
          } else {
            // סיסמא שגויה
            console.log("correct password - no");
            this.errorMessage = 'wrong password';
            if (confirm(`Sorry, you entered a wrong password! would you like to try again? - (yes) or you want to register? - (no)`)) {
              console.log("confirm try again - yes");
              // אפשרות הקשה נוספת
            } else {
              console.log("confirm register - yes");
              this.router.navigate(['/user/register']);
            }
          }
        }
        else {
          // אין משתמש בשם זה
          console.log("user exists - no");
          // שאל את המשתמש אם הוא רוצה להירשם
          if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
            console.log("confirm register - yes");
            // this.router.navigate(['user/register'], { queryParams: { username: userName } });
            this.router.navigate(['/user/register', userName]);
          } else {//אולי מיותר...
            console.log("confirm register - no");
            this.router.navigate(['/course/all']);
          }
        }
      }
    });
  }
}

































    // // בודק האם קיים משתמש בשם זה
    // let currentUser = this.users.find(x => x.name == userName);
    // if (currentUser) {
    //   console.log("user exists - yes");
    //   // בדוק אם הסיסמא נכונה
    //   if (password == currentUser.password) {
    //     console.log("correct password - yes");
    //     //בודק האם הוא מרצה
    //     this.userService.getLecturers().subscribe((lecturersData) => {
    //       let lecturer = lecturersData.find(x => x.name == currentUser.name && x.password == currentUser.password);
    //       if (lecturer) {
    //         let user: User = {
    //           id: currentUser.id,
    //           name: currentUser.name,
    //           address: currentUser.address,
    //           email: currentUser.email,
    //           password: currentUser.password,
    //           isLecturer: true
    //         }
    //         console.log("lecturer - yes");
    //         sessionStorage.setItem("IsLecturer", JSON.stringify(true));
    //       } else {
    //         let user: User = {
    //           id: currentUser.id,
    //           name: currentUser.name,
    //           address: currentUser.address,
    //           email: currentUser.email,
    //           password: currentUser.password,
    //           isLecturer: false
    //         }
    //         console.log("lecturer - no");
    //         sessionStorage.setItem("IsLecturer", JSON.stringify(false));
    //       }
    //       sessionStorage.setItem("User", JSON.stringify(currentUser));
    //       // העבר את המשתמש לדף הראשי
    //       this.router.navigate(['/course/all']);
    //     })
    //   } else {
    //     console.log("correct password - no");
    //     this.errorMessage = 'wrong password';
    //     if (confirm(`Sorry, you entered a wrong password! would you like to try again? - (yes) or you want to register? - (no)`)) {
    //       // if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
    //       console.log("confirm try again - yes");
    //       // this.router.navigate(['user/register'], { queryParams: { username: userName } });
    //       // אפשרות הקשה נוספת
    //     } else {//אולי מיותר...
    //       console.log("confirm register - yes");
    //       this.router.navigate(['/user/register', userName]);
    //     }
    //   }
    // } else {
    //   console.log("user exists - no");
    //   // שאל את המשתמש אם הוא רוצה להירשם
    //   if (confirm(`user named ${userName} does not exists. would you like to register?`)) {
    //     console.log("confirm register - yes");
    //     // this.router.navigate(['user/register'], { queryParams: { username: userName } });
    //     this.router.navigate(['/user/register', userName]);
    //   } else {//אולי מיותר...
    //     console.log("confirm register - no");
    //     this.router.navigate(['/course/all']);
    //   }
    // }
    // });

    // if (isUserExists(userName)) {

    //   if (correctPassword(userName, password)) {
    //     if (isLecturer(userName)) {
    //     } else {
    //     }
    //     sessionStorage.setItem("userName", JSON.stringify(userName))
    //   } else {
    //   }
    // } else {
    // }
  

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


// function isUserExists(userName: string): boolean {
//   //   // בדוק במערכת אם המשתמש קיים

//   //   this.userService.getUserByName(userName)
//   //   .subscribe({
//   //     next: () => {
//   //       return true;
//   //       //this.router.navigate(['/courses']);
//   //     },
//   //     error: (error) => {
//   //       if (error.status === 401) {
//   //         this.errorMessage = 'Invalid credentials.';
//   //       } else {
//   //         this.errorMessage = 'An error occurred during login.';
//   //       }
//   //     }
//   //   });

//   return true; // דמה
// }

// function correctPassword(userName: string, password: string): boolean {
//   // בדוק במערכת אם הסיסמא נכונה
//   return true; // דמה
// }
// function isLecturer(userName: string): boolean {
//   // בדוק במערכת אם המשתמש הוא מרצה
//   return true; // דמה
// }

// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   errorMessage: string | null = null;

//   @ViewChild('loginFormElement') loginFormElement: any;

//   constructor(private authService: UserService, private router: Router) { }

//   ngOnInit(): void {

//     this.loginForm = new FormGroup({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//   }

//   onSubmit(): void {
//     if (this.loginForm.invalid) {
//       return;
//     }

//     const username = this.loginForm.value.username;
//     const password = this.loginForm.value.password;

//     this.authService.login(username, password)
//       .subscribe({
//         next: () => {
//           this.router.navigate(['/courses']);
//         },
//         error: (error) => {
//           if (error.status === 401) {
//             this.errorMessage = 'Invalid credentials.';
//           } else {
//             this.errorMessage = 'An error occurred during login.';
//           }
//         }
//       });
//   }

//   onRegisterClick(): void {
//     const username = this.loginForm.value.username;
//     this.router.navigate(['/register'], { queryParams: { username } });
//   }

//   onLecturerLoginClick(): void {
//     this.router.navigate(['/lecturer-login']);
//   }
// }
