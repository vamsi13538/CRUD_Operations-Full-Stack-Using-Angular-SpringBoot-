import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  id: number = 0;
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  
  ngOnInit(){
    
    this.id = this.route.snapshot.params['id'];
    this.user = new User(0, '', '', 0, '');
    this.userService.getUser(this.id).subscribe(uddate => {
      this.user = uddate;
      console.log("In Side User Details Mehod : " + uddate);
    })
  }
}
