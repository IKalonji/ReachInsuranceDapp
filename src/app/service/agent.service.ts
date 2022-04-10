import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agent} from '../model/agent';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  baseUrl = 'https://insurance-company-app.herokuapp.com/api/agent';

  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  add(agent: Agent) {
    return this.http.post(`${this.baseUrl}/add`, agent);
  }

  update(agent: Agent) {
    return this.http.post(`${this.baseUrl}/update`, agent);
  }

  delete(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }

  salaryOfAgent(name: string) {
    return this.http.get(`${this.baseUrl}/salary/${name}`) as Observable<number>;
  }

  totalSalary() {
    return this.http.get(`${this.baseUrl}/salary`);
  }


}
