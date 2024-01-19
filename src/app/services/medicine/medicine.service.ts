import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  //Online url
  private BASE_URL = "http://192.168.147.125:3000/api/medi";

  constructor(private _http: HttpClient) { }

  storeMedicine(medicines: any): Observable<any> {
    return this._http.post(this.BASE_URL, medicines)
  }

  indexMedicine(): Observable<any> {
    return this._http.get(this.BASE_URL)
  }
}
