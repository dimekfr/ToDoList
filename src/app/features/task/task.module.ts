import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';
import { ListTaskComponent } from './list-task/list-task/list-task.component';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';




@NgModule({
  declarations: [ListTaskComponent, InsertTaskComponent, EditTaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TaskService
  ]
})
export class TaskModule { }
