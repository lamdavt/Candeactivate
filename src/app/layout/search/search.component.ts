import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result: string;
  resultTime: any;
  searchTerm$ = new Subject<string>();
  constructor() {
  }

  ngOnInit() {
    this.searchTerm$.pipe(debounceTime(500)).subscribe(data => {
      this.result = data;
      const time = new Date();
      this.resultTime = time;
    });
  }

}
