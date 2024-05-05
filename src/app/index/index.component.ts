import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NavbarComponent,
    MatIcon,
    MatRipple
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(private router : Router) {
  }

  goToDetails() {
    this.router.navigateByUrl(RoutePath.detail)
  }
}
