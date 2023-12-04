import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Department} from "../models/department.model";
import {EmployeesDetails} from "../models/employees-details.model";

const baseUrl = 'http://localhost:8080/api/employees-details';

@Injectable({
  providedIn: 'root',
})
export class EmployeesDetailsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<EmployeesDetails[]> {
    return this.http.get<EmployeesDetails[]>(baseUrl);
  }

  get(id: any): Observable<EmployeesDetails> {
    return this.http.get<EmployeesDetails>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByPassportID(passportID: any): Observable<EmployeesDetails[]> {
    return this.http.get<EmployeesDetails[]>(`${baseUrl}?passportID=${passportID}`);
  }
}
