import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() fullName: string;
  @Input() age: number;
  constructor() { }

  ngOnInit(): void {
  }

}
