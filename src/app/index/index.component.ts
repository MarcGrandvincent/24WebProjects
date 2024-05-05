import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";
import {PirateService} from "../../services/pirate.service";
import {IPirateModel} from "../../models/pirate.model";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NavbarComponent,
    MatIcon,
    MatRipple,
    MatProgressSpinner
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {

  public isLoading = true;

  constructor(private router : Router, private pirateService: PirateService) {
  }

  public pirates : IPirateModel[] = [];

  ngOnInit(): void {
    this.pirateService.getPirates().subscribe(pirates => {
      this.pirates = pirates;
      this.isLoading = false;
    })
  }

  goToDetails() {
    this.router.navigateByUrl(RoutePath.detail)
  }
}
