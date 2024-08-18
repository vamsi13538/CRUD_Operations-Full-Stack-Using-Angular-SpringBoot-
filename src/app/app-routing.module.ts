import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './users-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  {path: 'create-user',component:CreateUserComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'update-user/:id', component: UpdateUserComponent },
  {path:'user-details/:id',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
