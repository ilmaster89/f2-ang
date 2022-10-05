import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: Person[] = [];
  selectedPerson?: Person;
  
  constructor() { }

  ngOnInit(): void {
    let p = new Person();
    p.nome = "Alberto";
    p.cognome = "Ramponi";
    this.people.push(p);
  }

  addPerson(p:Person) {
    this.people.push(p);
  }

  personDetail(p:Person) {
    this.selectedPerson = p;
  }

}
