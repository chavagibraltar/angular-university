// import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
// import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  changeNavigate(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(["/user/login"]);
        break;

      case 1:
        this.router.navigate(["/user/register"]);
        break;

      case 2:
        this.router.navigate(["/user/logout"]);
        break;

      case 3:
        this.router.navigate(["/home"]);
        break;

      case 4:
        this.router.navigate(["/course/all"]);
        break;

      case 5:
        this.router.navigate(["/course/add"]);
        break;


    }
  }
}
