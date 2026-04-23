import { Injectable } from '@angular/core';
export interface Student {
  name: string;
  age: number;
  course: string;
}
@Injectable({
  providedIn: 'root',
})
export class StudentService {
students= [
  {name: "Shweta", age: 21, course:"IT"},
  {name: "Shreya",age: 21, course:"CSE"},
  {name: "Pratiksha",age: 21, course:"ETC"}
];
  getstudents(): Student[]{
    return this.students
  }
}
