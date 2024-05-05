import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {IPirateModel} from "../models/pirate.model";

@Injectable({
  providedIn: 'root'
})
export class PirateService {

  private api = "https://iutdijon.u-bourgogne.fr/intra/iq/presque24/queensannesrevenge/"

  public httpOptions = {

    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public httpClient : HttpClient) {
  }

  public getPirates(): Observable<IPirateModel[]> {
    return this.httpClient.get<IPirateModel[]>(`${this.api}`, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        return of();
      }));
  }
}
