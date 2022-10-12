import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Student } from 'src/app/models/student';
import { addStudent, loadStudents } from '../store/student.actions';
import { selectStudents } from '../store/student.selectors';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  constructor(private store:Store<any>) { 

  }

  ngOnInit(): void {
  }

  addStudent(name: String){
    let student = new Student();
    student.id = Math.floor(Math.random() * 1000000);
    student.age =20;
    student.department ='CSE';
    student.name=name;
    this.store.dispatch(addStudent({student}));
    

  }

}
