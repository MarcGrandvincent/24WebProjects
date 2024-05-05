import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatRipple} from "@angular/material/core";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatRipple
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router : Router) {
  }

  goToPassword() {
    this.router.navigateByUrl(RoutePath.route)
  }

  goToIndex() {
    this.router.navigateByUrl(RoutePath.index)
  }
}
