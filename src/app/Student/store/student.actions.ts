import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/models/posts';
import { Student } from 'src/app/models/student';

export const loadStudents = createAction(
  '[Student] Load Students'
);

export const loadStudentsSuccess = createAction(
  '[Student] Load Students Success',
  props<{ data: Posts[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student] Load Students Failure',
  props<{ error: any }>()
);

export const addStudent = createAction(
  '[Student] Add Student',
  props<{student:Student}>()
);

export const deleteStudent = createAction(
  '[Student] Delete Student',
  props<{studentId:Number}>()
);