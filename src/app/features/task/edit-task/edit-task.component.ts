import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild("formTask") formTask!: NgForm;
  task!: Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {

    let id = +this.route.snapshot.params['id'];
    const res = this.taskService.findById(id);
    if(res !== undefined)
      this.task = res;
    else
      throw new Error (" Task not found: id = " + id);
  }

  updateTask(){
    this.taskService.updateTask(this.task);
    this.router.navigate(['/tasks']);
  }

}
