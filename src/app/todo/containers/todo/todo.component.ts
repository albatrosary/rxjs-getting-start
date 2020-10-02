import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoFacade } from '../../store/todo.facade';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  loading$ = this.todoFacade.loading$;
  todos$ = this.todoFacade.todos$;

  constructor(private todoFacade: TodoFacade) {}
  ngOnInit() {
    this.todoFacade.loadAll();
  }
  create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false;
    todo.createdAt = Math.floor(date.getTime() / 1000);
    todo.updatedAt = Math.floor(date.getTime() / 1000);
    this.todoFacade.create(todo);
  }
  update(todo: Todo) {
    this.todoFacade.update(todo);
  }
  remove(id: number) {
    this.todoFacade.remove(id);
  }
}
