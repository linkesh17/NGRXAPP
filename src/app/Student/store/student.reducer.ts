import { state } from '@angular/animations';
import { Action, createReducer, on, Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts';
import { Student } from 'src/app/models/student';
import * as StudentActions from '../store/student.actions';


export const studentFeatureKey = 'student';

export interface StudentState {
  student : Student[];
  posts: Posts[];
  error:String;

}

export const initialState: StudentState = {
  student : [],
  posts:[],
  error:''
};

export const studentreducer = createReducer(
  initialState,
  on(StudentActions.addStudent,
    (state,action) => ({
    ...state,
    student:[...state.student,action.student]
  })
  ),
  on(StudentActions.deleteStudent,
    (state,action) => ({
      ...state,
      student : state.student.filter((val)=> val.id != action.studentId)
    })        
    ),
  on(
    StudentActions.loadStudentsSuccess,
    (state,action)=>({
      ...state,
      posts : action.data.map((val:any)=> {
        let newObj =JSON.parse(JSON.stringify(val));
        delete newObj.id;
        console.log(newObj);
        return newObj;
      })

    }),    
  ),
  on(StudentActions.loadStudentsFailure,
    (state,action)=>({
      ...state,
      error: action.error

    })
    )



);

export function reducer(state:StudentState,action:Action){
  return studentreducer(state,action);
}