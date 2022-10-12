import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as studentReducer from '../store/student.reducer';

export const selectStudentState = createFeatureSelector<any>(studentReducer.studentFeatureKey);

export const selectStudents = createSelector(
    selectStudentState,
    (state:studentReducer.StudentState) => state.student 
);

