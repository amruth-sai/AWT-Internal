import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { FormGroup, FormControl } from '@angular/forms';


import {Student} from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApp';
  students : Student[] = []
  addStud : boolean = false
  studentForm : any
  constructor(private studentService : StudentService)
  {
    this.studentForm = new FormGroup({
      username : new FormControl(''),
      branch : new FormControl(''),
      id : new FormControl('')
  });
  }
  getStudents()
  {
    this.studentService.getStudents()
    .subscribe(
      (data) =>{
        this.students = (data)
      }
    )
    console.log(this.students)
  }

  addStudent()
  {
    console.log(this.addStud)
    this.addStud = !this.addStud
  }
  addStudents()
  {
    console.log(this.studentForm.value)
    this.studentService.addStudent(this.studentForm.value).subscribe((data)=>{
      console.log(data)
    })
  }

  delete(student:Student)
  {
    console.log(student)
    this.studentService.deleteStudent(student.id).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

  update()
  {
    const student = this.studentForm.value
    this.studentService.updateStudent(student).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}