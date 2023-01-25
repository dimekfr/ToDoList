import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

const LS_KEY: string = "tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task [] = [];

  constructor() { }

  listTasks(): Task[] {
    const tasks = localStorage[LS_KEY];
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void{
    const tasks = this.listTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage[LS_KEY] = JSON.stringify(tasks);
  }

  findById(id: number): Task | undefined {
    const tasks : Task[] = this.listTasks();
    
    return tasks.find( task => task.id === id);
  }

  removeTask(id: number){
    let tasks: Task[]= this.listTasks();
    tasks = tasks.filter(task => task.id !== id);
    localStorage[LS_KEY] = JSON.stringify(tasks);
  }

  updateTask(task: Task): void {
    const tasks: Task[] =  this.listTasks();

    tasks.forEach(
      (obj, index, objs) => {
        if(task.id === obj.id) {
          objs[index] = task;
        }
      }
    );
    localStorage[LS_KEY] = JSON.stringify(tasks);    
  }
}
