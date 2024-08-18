import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  user: User[] = [];
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  //--> Get All Users
  private getUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.user = data
      console.log("In Side GetAllUsers Method : " + data);
    })
  }

  //--> Get User Details ById
  userDetails(id : number) {
    this.router.navigate(['user-details', id]);
  }

  //--> Update User
  updateUser(id : number) {
    this.router.navigate(['update-user',id])
  }

  //--> Delete User
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(ddata => {
      console.log("In Side Delete User Method : " + ddata);
      this.getUsers();
    })
  }
}
