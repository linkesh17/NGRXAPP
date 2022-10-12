import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StoreModule } from '@ngrx/store';
import { reducer, studentFeatureKey } from './store/student.reducer';
import { StudentViewComponent } from './student-view/student-view.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';



@NgModule({
  declarations: [
    StudentAddComponent,
    StudentViewComponent
  ],
  imports: [
    CommonModule,    
    HttpClientModule,
    StoreModule.forFeature(studentFeatureKey, reducer),
    EffectsModule.forFeature([StudentEffects])
  ],
  exports:[
    StudentAddComponent,
    StudentViewComponent
  ]
})
export class StudentModule { }
