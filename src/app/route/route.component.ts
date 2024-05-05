import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [
    NavbarComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
  ],
  templateUrl: './route.component.html',
  styleUrl: './route.component.scss'
})
export class RouteComponent {

}
