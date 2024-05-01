import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    NavbarComponent,
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {

}
