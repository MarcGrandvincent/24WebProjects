import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatRipple} from "@angular/material/core";

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

}
