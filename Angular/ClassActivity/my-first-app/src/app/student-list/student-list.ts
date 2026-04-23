import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  // import { studentService } from './../../services/student-service';
templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[]=[];
  // any means it can store any type of array 

  constructor(private studentService:StudentService) { }


  ngOnInit(){
    this.students=this.studentService.getstudents();
    console.log(this.students)
  }

}
/**
 *
 */
// write a 2 examples services with example and learn more about dependency injection