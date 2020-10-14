import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  name = '';

  // tslint:disable-next-line:typedef
  showEvent(event) {
    this.name = event.target.value;
  }
  constructor() {}

  // tslint:disable-next-line:typedef
  ngOnInit() {}
}
