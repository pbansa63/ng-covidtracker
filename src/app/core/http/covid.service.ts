import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private readonly _apiUrl: string = 'https://api.covid19india.org/data.json';

  private readonly _numberApiUrl: string = 'http://numbersapi.com';
  public constructor(private _http: HttpClient) { }

  /**
   * Send a request to get no. of covid cases
   */
  public getCovidData(): Observable<Object> {
    const covidCasesUrl: string = this._apiUrl;
    return this._http.get(covidCasesUrl);
  }


  /**
   * Calling number API to display label at data points
   */
  public callNumberAPI(number: Number): Observable<any> {
    const numberAPIUrl: string = this._numberApiUrl + `/${number}`;
    return this._http.get(numberAPIUrl, { responseType: 'text' });
  }

}
