import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../to-do';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todos:ToDo[] = [];
  todo:ToDo = {} as ToDo;
  toDoToUpdate: ToDo = {id:0, description:"", isCompleted:false};

  // index:number = -1;
  // @Input() existingToDo: ToDo[] = [];
    // todos:ToDo[] = [];

  constructor(private todoDb:ToDoListService) {}

  ngOnInit(): void {
  }

  updateToDos()
  {
    // this.todo.iscompleted = false;
    this.todoDb.updateToDos(this.todo.id, this.todo).subscribe(
      (result) => {this.todoDb.getToDos().subscribe(
        
        (resultToDos) => {this.todos = resultToDos}
      )}
      //  
      //  {
      // //   result.id = parseInt((<HTMLInputElement> document.getElementById("IdU")).value);
      // //   result.description = (<HTMLInputElement> document.getElementById("DescU")).value;
      // //   result.iscomplete = Boolean((<HTMLInputElement> document.getElementById("isCompU")).value);
      //   this.todo = result;
      // }

        )
   }
}




  // SelectItemToUpdate(){
  //   this.index = parseInt((<HTMLInputElement> document.getElementById("index")).value);
  //   this.toDoToUpdate = this.existingToDo[this.index];
  //   console.log(this.toDoToUpdate);
  // }

  // updateToDos()
  // {
  //   this.toDoToUpdate.id= parseFloat((<HTMLInputElement> document.getElementById("IdU")).value);
  //   this.toDoToUpdate.description= (<HTMLInputElement> document.getElementById("DescU")).value;
  //   // this.toDoToUpdate.iscomplete= (<HTMLInputElement> document.getElementById("IdU")).value.toString();
  //   this.existingToDo[this.index] = this.toDoToUpdate;
  // }
