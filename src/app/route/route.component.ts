import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {RoutePath} from "../navigation/route.path";
import {PirateService} from "../../services/pirate.service";
import {NotificationService} from "../../services/notification.service";
import {Route, Router} from "@angular/router";
import {IRouteModel} from "../../models/route.model";
import {MatChip, MatChipListbox, MatChipOption, MatChipSet} from "@angular/material/chips";

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [
    NavbarComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatChipSet,
    MatChip,
    MatChipListbox,
    MatChipOption,
  ],
  templateUrl: './route.component.html',
  styleUrl: './route.component.scss'
})
export class RouteComponent implements OnInit {

  public routes: IRouteModel[] = [];
  public schedule : string[][] = [];

  constructor(private pirateService: PirateService, private notification: NotificationService, private router: Router) {
    this.pirateService.tryLogin(localStorage.getItem("password") ?? "").then(() => {
      }
    ).catch(() => {
        this.notification.showError("Session expiré")
        this.router.navigateByUrl(RoutePath.password)
      }
    )
  }

  ngOnInit(): void {
    this.pirateService.GetRoute("AK336").subscribe((route) => {
      this.routes.push(route);
    })
    this.pirateService.GetSchedule("AK336").subscribe((route) => {
      this.schedule.push(route);
    })

    this.pirateService.GetRoute("RZ673").subscribe((route) => {
      this.routes.push(route);
    })
    this.pirateService.GetSchedule("RZ673").subscribe((route) => {
      this.schedule.push(route);
    })

    this.pirateService.GetRoute("AE251").subscribe((route) => {
      this.routes.push(route);
    })
    this.pirateService.GetSchedule("AE251").subscribe((route) => {
      this.schedule.push(route);
    })

    this.pirateService.GetRoute("ZZ666").subscribe((route) => {
      this.routes.push(route);
    })
    this.pirateService.GetSchedule("ZZ666").subscribe((route) => {
      this.schedule.push(route);
    })
  }

  public isReserved(seller : string, number : string) : boolean {
    return localStorage.getItem(`paqueta_${seller}`) == number;
  }

  public reserve(seller : string, number : string) {
    if (!this.isReserved(seller, number)){
      localStorage.setItem(`paqueta_${seller}`, number)
    }
    else {
      localStorage.removeItem(`paqueta_${seller}`)
    }
  }
}
