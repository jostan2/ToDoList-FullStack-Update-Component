import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos:ToDo[] = [];

  constructor(private todoDb:ToDoListService) {
    todoDb.getToDos().subscribe(
      (results:ToDo[]) => {
        this.todos = results;
        console.log(results);
      }
  )}


  ngOnInit(): void {
  }


}
