import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, take } from 'rxjs';
import { Posts } from 'src/app/models/posts';
import * as StudentActions from "../store/student.actions";
import { StudentProvider } from './student.provider';


@Injectable()
export class StudentEffects {

  loadPostData$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(StudentActions.addStudent),
      mergeMap((action) =>{
        return this.studentProvider.getPosts().pipe(                    
          map((data:any)=>{
            return StudentActions.loadStudentsSuccess({data});
          }),
          catchError((error)=>{
            return of(
              StudentActions.loadStudentsFailure({error:"Error inAPI"})
            )
          })
        )
      }

      )
    );
  });
  constructor(private actions$: Actions,private studentProvider:StudentProvider) {}
}
