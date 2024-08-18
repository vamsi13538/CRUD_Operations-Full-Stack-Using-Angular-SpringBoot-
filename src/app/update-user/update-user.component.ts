import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { error } from 'console';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{

  id: number = 0;
  user: User = new User(0, '', '', 0, '');
  
  constructor(private userService: UserService, private router: Router,
    private route : ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(udata => {
      this.user = udata;
      console.log("In Side ngOnInit Update User : " + udata);
    }, error => {
      console.error("Error Updating User : " + error);
    })
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(udata => {
      this.goToUsersList();
    }, error => {
      console.log("Error Updating User : " + error);
    })
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }
  
 
}
