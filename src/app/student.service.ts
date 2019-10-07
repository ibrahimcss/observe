import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';
/*
  students: Student[] = [{
    id: 1,
    name: 'Ahmet',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'ITU'
  },
    {
      id: 2,
      name: 'Mehmet',
      EnrollmentNumber: 110470116023,
      College: 'VVP Engineering College',
      University: 'ITU'
    },
    {
      id: 3,
      name: 'Kerem',
      EnrollmentNumber: 110470116022,
      College: 'VVP Engineering College',
      University: 'ITU'
    },
    {
      id: 4,
      name: 'Kerem',
      EnrollmentNumber: 110470116022,
      College: 'VVP Engineering College',
      University: 'ITU'
    },
    {
      id: 5,
      name: 'Kerem',
      EnrollmentNumber: 110470116022,
      College: 'VVP Engineering College',
      University: 'ITU'
    }];
  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 100000);
    });

    return studentsObservable;
  }
  */
  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /*
  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.http.get(`${this.baseUrl}`));
      }, 100);
    });

    return studentsObservable;
  }

   */
}
