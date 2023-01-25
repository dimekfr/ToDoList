import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './features/task/edit-task/edit-task.component';
import { InsertTaskComponent } from './features/task/insert-task/insert-task.component';
import { ListTaskComponent } from './features/task/list-task/list-task/list-task.component';

const routes: Routes = [
  {path:'', redirectTo: 'tasks/list' ,pathMatch: 'full'},
  {path:'tasks', redirectTo: 'tasks/list'},
  {path: 'tasks/list', component: ListTaskComponent},
  {path:'tasks/new', component: InsertTaskComponent},
  {path:'tasks/edit/:id', component: EditTaskComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
