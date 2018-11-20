import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormCanDeactivate } from '../form-can-deactivate/form-can-deactivate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
  }
pageNew() {
  this.router.navigate(['./new']);
}
pageSearch() {
  this.router.navigate(['./search']);
}
pageMultiselect() {
  this.router.navigate(['./multiselect']);
}
Logout() {
  localStorage.clear();
  window.location.reload();
}

}
