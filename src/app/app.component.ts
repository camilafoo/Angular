import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  tasks: Task[] = [
    {taskName: "Fazer Comida", done: true},
    {taskName: "Tomar banho", done: true},
    {taskName: "Lavar roupa", done: false},
    {taskName: "Dormir", done: false},    
  ];

  add(taskName, done){
    let task: Task = { taskName: taskName, done: done};
    this.tasks.push(task);
    console.log(task);
  }

  del(index){
    this.tasks.splice(index, 1);
  }

}

class Task {
  taskName: string;
  done: boolean;  
}