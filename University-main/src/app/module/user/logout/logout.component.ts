import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if (sessionStorage.getItem("User")) {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.removeItem("User")
          this.router.navigate(['/user/login'])
          Swal.fire({
            title: "Goodbye!",
            text: "You successfully logged out!!!",
            icon: "success"
          });
        }
        else
          this.router.navigate(['course/all'])
      });
    } else {
      Swal.fire({
        title: "You have to log in first!",
        text: "You can't be logout without login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
      });
    }
  }
}
