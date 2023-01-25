import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.css']
})

export class InsertTaskComponent implements OnInit {

  @ViewChild('formTask') formTask! : NgForm;
  task!: Task;

  constructor( private taskService: TaskService, private router: Router){

  }
  ngOnInit(): void {
    this.task = new Task();
  }

  addTask(): void{
    if(this.formTask.form.valid) {
      this.taskService.addTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
