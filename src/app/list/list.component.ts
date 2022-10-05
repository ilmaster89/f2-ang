import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  strings: string[] = ["A", "B", "C", "D"];

  constructor() { }

  ngOnInit(): void {
  }

  addString(s: string) {
    this.strings.push(s);
  }
}
