import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/retry';

@Injectable()
export class UserDataService {

  constructor(
    public http: HttpClient
  ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').retry(2);
  }

  addUser(user){
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  removeUser(user){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/1', user);
  }

  editUser(user){
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', user);
  }
}
