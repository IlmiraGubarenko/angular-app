import { Component, OnInit } from '@angular/core';
import  { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  newUsers:any;
  user = {
    name: '',
    email: '',
    edit: false
  };
  connectionError:string = '';
  addSuccess:boolean = false;
  addError:boolean = false;
  removeSuccess:boolean = false;
  removeError:boolean = false;
  editSuccess:boolean = false;
  editError:boolean = false;
  showUsers:boolean = true;

  constructor(
    public userService: UserDataService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe( users => {
      this.users = users;
    }, error => {
      this.connectionError = error.message;
    } )
  }

  addUser(form){
    this.userService.addUser(this.user).subscribe( user => {
      this.users.unshift(user);
      form.resetForm();
      this.addSuccess = true;
      setTimeout( () => {
        this.addSuccess = false;
      }, 2000);
    }, error => {
      this.addError = true;
      setTimeout( () => {
        this.addSuccess = false;
      }, 2000);
    } )
  }

  removeUser(user){
    this.userService.removeUser(this.user).subscribe( user => {
      this.users.splice(user, 1);
      this.newUsers.splice(user, 1);
      this.removeSuccess = true;
      setTimeout( () => {
        this.removeSuccess = false;
      }, 2000);
    }, error => {
      this.removeError = true;
      setTimeout( () => {
        this.removeError = false;
      }, 2000);
    } )
  }

  editUser(user){
    user.edit = !user.edit;

    if (!user.edit) {
      this.userService.editUser(this.user).subscribe( user => {
        this.editSuccess = true;
        setTimeout( () => {
          this.editSuccess = false;
        }, 2000);
      }, error => {
        this.editError = true;
        setTimeout( () => {
          this.editError = false;
        }, 2000);
      } )
    }
  }

  searchUsers(searchItem){

    this.newUsers = this.users.filter( user => user.name === searchItem);

    if(searchItem === ''){
      this.showUsers = true;
    } else {
      this.showUsers = false;
    }
  }
}
