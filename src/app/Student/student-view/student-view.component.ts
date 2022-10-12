import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { deleteStudent } from '../store/student.actions';
import { StudentState } from '../store/student.reducer';
import { selectStudents } from '../store/student.selectors';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  student$: Observable<Student[]>;
  constructor(private store: Store<StudentState>) {
    this.student$ = this.store.pipe(select(selectStudents));
  }

  DeleteStudent(Id:any){
    this.store.dispatch(deleteStudent({studentId:Id}))
  }

  ngOnInit(): void {
    
  }

}
