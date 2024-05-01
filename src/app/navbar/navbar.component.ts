import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        MatButton,
        MatIcon,
        MatToolbar
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {

  }

  goToTest1() : void {
    this.router.navigateByUrl(RoutePath.test)
  }

  goToTest2() : void {
    this.router.navigateByUrl(RoutePath.testTwo)
  }
}
