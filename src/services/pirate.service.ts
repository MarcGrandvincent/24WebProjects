import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, firstValueFrom, Observable, of} from "rxjs";
import {IPirateModel} from "../models/pirate.model";
import {IRouteModel} from "../models/route.model";

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

  public login(password : string) : Observable<void> {
    return this.httpClient.get<void>(`https://iutdijon.u-bourgogne.fr/intra/iq/presque24/routes.php?password=${password}&code=AK336`, this.httpOptions);
  }

  public async tryLogin(password: string): Promise<void> {
    return firstValueFrom(this.login(password));
  }

  public GetRoute(code : string) : Observable<IRouteModel> {
    return this.httpClient.get<IRouteModel>(`https://iutdijon.u-bourgogne.fr/intra/iq/presque24/routes.php?password=EdwardTeach1718&code=${code}`, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        return of();
      }));
  }

  public GetSchedule(code : string) : Observable<string[]> {
    return this.httpClient.get<string[]>(`https://iutdijon.u-bourgogne.fr/intra/iq/presque24/days.php?password=StedeBonnet&route=${code}`, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        return of();
      }));
  }
}
