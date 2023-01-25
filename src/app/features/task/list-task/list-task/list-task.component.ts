import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { Task } from 'src/app/shared/models/task.model';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task [] = [];

  constructor(private taskService: TaskService){ };

  ngOnInit(): void {
    this.tasks= this.listTasks();
  }

  listTasks() : Task [] {
    return this.taskService.listTasks();
  }

  removeTask($event: any, task: Task) {

    $event.preventDefault();

    console.log('Inside the remove method')

    if (confirm(`Are you sure to remove the task ${task.title}?`)) {
      this.taskService.removeTask(task.id!);
      this.tasks = this.listTasks();
    }

  }

}
