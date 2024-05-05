import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Injectable, NgZone} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  showSuccess(message: string): void {
    const configuration = {
      panelClass: ['success'],
      duration: 3000
    };

    this.openSnackbar(message, configuration);
  }

  showError(message: string): void {
    const configuration = {
      panelClass: ['error']
    };

    this.openSnackbar(message, configuration);
  }

  showWarning(message: string): void {
    const configuration = {
      panelClass: ['alert']
    };

    this.openSnackbar(message, configuration);
  }

  openSnackbar(message: string, configuration: MatSnackBarConfig): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', configuration);
    });
  }
}
