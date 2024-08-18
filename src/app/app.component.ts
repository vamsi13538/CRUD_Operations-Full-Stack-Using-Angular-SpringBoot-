import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './model/user';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 /* constructor(private userService: UserService) { }

  // adduser
  user: User = new User(0, "", "", 0, "");
  users: User[] = [];
    
  adduser() {
    this.userService.addUser(this.user).subscribe(addResponce => {
      console.log("add user succesfully : " + addResponce);
      this.users.push({ ...this.user });
      console.log("Inside addUser UserMethod");
      this.clearUser();
    }, error => {
      console.log("Error Occur While Adding User", error);
    })
  }

  // clear User
  clearUser() {
    this.user = new User(0,"", "", 0, "");
  } 

  // getUser
  id: number = 0;
 getUserDataById : User = new User(0,"", "", 0, "");

  getUser() {
    console.log("getUserMethod, id : " + this.id);
    this.userService.getUser(this.id).subscribe(getUser => {
      this.getUserDataById = getUser;
      console.log("Inside get UserMethod");
      console.log("getUser data from backend : " + getUser);
      this.id = 0;
    }, error => {
      console.error("error fetching user data " + error);
    })
  } 

  // Update User

  onEdit(user : User) {
    this.user = { ...user };
  }

  updateUser() {
    console.log("updateUserMethod, id : " + this.id);
    this.userService.updateUser(this.user.id, this.user).subscribe(updateDate => {
      console.log("Updated User Succesfull : " + updateDate)
      console.log("Inside Update UserMethod");
      const index = this.users.findIndex(u => u.id === this.user.id);
      if (index !== -1) {
        this.users[index] = { ...this.user };
      }
      this.clearUser();
    }, error => {
      console.error("Error updating user", error);
    })
  }

  // Save user
  saveuser() {
    if (this.user.id === 0) {
      this.adduser();
      console.log("Inside save Method");
    }else {
      this.updateUser();
    }
  }


   // delete user
   onDelete(id : number) {
    this.userService.deleteUser(id).subscribe(deleteResponce => {
      console.log("Delete User Succesfully : " + deleteResponce);
      this.users = this.users.filter(user => user.id !== id);
    }, error => {
      console.error("Error deleting User : " + error);
    })
  } */
  
  title = "Crud Operation"
}
