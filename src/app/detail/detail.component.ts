import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() newStringEmitter = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  newStringEvent(s: string) {
    this.newStringEmitter.emit(s);
  }


}
