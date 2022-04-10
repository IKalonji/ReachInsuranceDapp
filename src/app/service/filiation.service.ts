import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Filiation} from '../model/filiation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiliationService {

  baseUrl = 'https://insurance-company-app.herokuapp.com/api/filiation';

  constructor(private http: HttpClient) { }


  getFiliations() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  addFiliation(filiation: Filiation) {
    return this.http.post(`${this.baseUrl}/add`, filiation);
  }

  updateFiliation(filiation: Filiation) {
    return this.http.post(`${this.baseUrl}/update`, filiation);
  }

  deleteFiliation(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }

  incomeOfFiliationPerMonth(dateStr: string = ``) {
    return this.http.get(`${this.baseUrl}/income/${dateStr}`) as Observable<number>;
  }


}
