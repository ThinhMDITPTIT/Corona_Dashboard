import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Covid19Service {
  private _worldInformation: any;
  private _totalCountryInformation: any;
  private _timeseriesOfCurrentCountry: any;
  public totalCountryInformationEmit: EventEmitter<any>;
  public timeseriesOfCurrentCountryEmit: EventEmitter<any>;
  constructor(private httpClient: HttpClient) {
    this.totalCountryInformationEmit = new EventEmitter<any>();
    this.timeseriesOfCurrentCountryEmit = new EventEmitter<any>();
  }

  public set worldInformation(value: any[]) {
    this._worldInformation = value;
  }

  public get worldInformation() {
    return this._worldInformation;
  }

  public set totalCountryInformation(value: any[]) {
    this._totalCountryInformation = value;
    this.totalCountryInformationEmit.emit(this.totalCountryInformation);
  }

  public get totalCountryInformation() {
    return this._totalCountryInformation;
  }

  public set timeseriesOfCurrentCountry(value: any[]) {
    this._timeseriesOfCurrentCountry = value;
    this.timeseriesOfCurrentCountryEmit.emit(this.timeseriesOfCurrentCountry);
  }

  public get timeseriesOfCurrentCountry() {
    return this._timeseriesOfCurrentCountry;
  }

  public getBrefInfo(): Observable<any> {
    return this.httpClient.get<any>(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief`
    );
  }
  public getLatestInfo(): Observable<any> {
    return this.httpClient.get<any>(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest`
    );
  }
  public getInfoByCountryAndIso2Code(isoCode: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${isoCode}&onlyCountries=true`
    );
  }
  public getInfoByTimeseriesAndIso2Code(isoCode: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${isoCode}&onlyCountries=true`
    );
  }
}
