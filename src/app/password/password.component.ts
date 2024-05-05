import {Component} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatRipple} from "@angular/material/core";
import {PirateService} from "../../services/pirate.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {catchError} from "rxjs";
import {NotificationService} from "../../services/notification.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Router} from "@angular/router";
import {RoutePath} from "../navigation/route.path";

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    NavbarComponent,
    MatRipple,
    ReactiveFormsModule,
    MatProgressSpinner
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

  public isLoading = false;

  public passwordForm = this.fb.group({
    password: [''],
  });

  constructor(private pirateService: PirateService, private fb: FormBuilder, private notification: NotificationService, private router: Router) {
  }

  onSubmit() {
    this.isLoading = true;
    this.pirateService.tryLogin(this.passwordForm.getRawValue().password ?? "").then(() => {
        this.notification.showSuccess("Connexion réussie !");
        this.router.navigateByUrl(RoutePath.route)
        localStorage.setItem("password", this.passwordForm.getRawValue().password ?? "")
      }
    ).catch(() => {
        this.notification.showError("Mot de passe incorect !")
        this.isLoading = false;
      }
    )
  }

}
