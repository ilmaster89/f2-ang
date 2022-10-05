import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person = new Person();

  
  @Output() newPersonEmitter = new EventEmitter<Person>;

  @Input() singlePerson?: Person;
  
  constructor() { }

  ngOnInit(): void {
  }

  newPersonEvent() {
    this.newPersonEmitter.emit(this.person);
  }

}
