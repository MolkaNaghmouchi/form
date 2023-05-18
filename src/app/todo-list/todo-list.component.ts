import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listTodo!: todo[];
  count!: number;

  constructor(private serviceCal: CalculService) {}

  ngOnInit(): void {
    this.listTodo = [
      { userId: 1, id: 1, title: 'task1', completed: true },
      { userId: 2, id: 2, title: 'task2', completed: true },
      { userId: 3, id: 3, title: 'task3', completed: false },
      //this.count=this.serviceCal.getNumberOf(this.listTodo , critiria:'completed' , value:true )
    ];
  }
}
