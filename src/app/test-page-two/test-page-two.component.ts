import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-test-page-two',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './test-page-two.component.html',
  styleUrl: './test-page-two.component.scss'
})
export class TestPageTwoComponent {

}
