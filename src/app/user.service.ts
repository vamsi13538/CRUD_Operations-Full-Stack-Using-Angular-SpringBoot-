import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user : User) :Observable<any> {
    return this.http.post("http://localhost:8081/saveUser", user);
  }

 /* getUser(phone:number) :Observable<any>{
    return this.http.get("http://localhost:8081/user/" + phone);
  } */

  getUser(id:number) :Observable<any>{
    return this.http.get("http://localhost:8081/user/" + id);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8081/users");
  }

  updateUser(id : number,user:User) :Observable<any>{
    return this.http.put("http://localhost:8081/updateUser/"+ id,user);
  }

  deleteUser(id : number) : Observable<any> {
    return this.http.delete("http://localhost:8081/deleteUser/"+id);
  }
  
}
