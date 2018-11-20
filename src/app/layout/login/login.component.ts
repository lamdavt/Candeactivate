import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(private User: UserService,
      private router: Router,
      private localStorage: LocalStorageService) { }

  ngOnInit() {
    const user = this.localStorage.get('user');
   if (user) {
     this.router.navigate(['./home-page']);
   }
  }
  Login() {
    this.User.checkLogin(this.username, this.password).subscribe(data => {
    if (data) {
      this.localStorage.add('user', data);
      this.router.navigate(['home-page']);
    } else {
    alert('Login Failed');
    }
    });
  }
}
