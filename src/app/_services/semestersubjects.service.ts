import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SemesterSubjectsService {
  
  private baseUrl = 'http://localhost:3000/semesterData';

  constructor(private http: HttpClient) { }

  getSemesterSubjects(): Observable<any> {  

    return this.http.get<any>(`${this.baseUrl}`);
  }
}
