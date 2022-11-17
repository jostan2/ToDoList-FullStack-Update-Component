import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToDo } from './to-do';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  baseURL:string;
  
  constructor(private http:HttpClient, @Inject("BASE_URL") private url:string) {
    this.baseURL=url;
  }
  
   getToDos():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.baseURL + "api/todo")
   }

   getToDoById(id:number):Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.baseURL + "api/getOne/{id}")
   }

   updateToDos(id:number, todo:ToDo){
    console.log(this.baseURL);
    console.log(todo);
    
    return this.http.put(this.baseURL + `api/todo/update/${id}`, todo )
  
   }

  //  setChecked(id: number) {
  //   var melding = this.getToDoById(id);
  //   console.log(!melding.);
  //   this.checkedChange.next(!melding.checked);
}
