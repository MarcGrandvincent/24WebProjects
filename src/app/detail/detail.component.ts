import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let elements = this.el.nativeElement.querySelectorAll('.sousBlocDetail');
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;
      if(positionFromTop - window.innerHeight <= 0) {
        element.classList.add('visible');
      }
    }
  }

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.onWindowScroll();
  }
}
