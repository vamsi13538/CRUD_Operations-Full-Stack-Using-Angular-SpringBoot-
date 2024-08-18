import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{

  user: User = new User(0, '', '', 0, '');
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  saveUser() {
    this.userService.addUser(this.user).subscribe(sdata => {
      console.log("In Side Save User Method : " + sdata);
      this.goToUsersList();
    }, error => {
      console.error("Error Saving User : " + error);
    })
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log("add user details : " + this.user);
    this.saveUser();
  }
}
