import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Student} from './Student';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient) { }
  students : Student[] = [
    
  ]

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:3000/students')
  }

  addStudent(student:any)
  {
    return this.http.post('http://localhost:3000/students',student)
  }
  
  deleteStudent(rollno:string)
  {
    return  this.http.delete('http://localhost:3000/students/'+rollno);
  }

  updateStudent(student:Student) : Observable<any>
  {
    
    return  this.http.put('http://localhost:3000/students/'+student.id,student);
  }
}