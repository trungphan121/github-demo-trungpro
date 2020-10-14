import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  public code: string;
  public name: string;
  public price: number;
  public list: Array<any> = [];
  public item: object;
  add(): void {
    this.item = {
      code: this.code,
      name: this.name,
      price: this.price,
    };
    this.list.push(this.item);
  }
  constructor() {}

  ngOnInit(): void {}
}
