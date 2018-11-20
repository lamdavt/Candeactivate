import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

   getUSers(): Observable<any[]> {
    const url = 'https://api.myjson.com/bins/18c1fk';
    return this.http.get(url).pipe(map(data => {
      console.log(data);
      return data.json();
    }));
  }
  checkLogin(username: String, password: String): Observable<any> {
    return this. getUSers().pipe(map(users => {
      return users.find(user => {
        return user.username === username && user.password === password;
      });
    }));

  }
}
