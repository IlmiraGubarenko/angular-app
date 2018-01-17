import { Component } from '@angular/core';

interface User{
  name:string,
  email:string,
  editing:boolean
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})

export class FormEventsComponent {

  user: User = {
    name: '',
    email: '',
    editing: false
  };

  users: User[] = [];

  constructor() { }

  // formEvent(e){
  //   console.log(e);
  //   this.text = e.target.value;
  // }

  onSubmit(form){
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: false
    });

    form.resetForm();
  }

  removeUser(i){
    this.users.splice(i, 1);
  }

  editUser(user){
    user.editing = !user.editing;
 }

}


