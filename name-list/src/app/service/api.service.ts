import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listOfNames = new Array();
  constructor() { }

  storeList(list: object) {
    localStorage.setItem('names', JSON.stringify(list));
  }

  showAllItems() {
    this.listOfNames = new Array;
    let names = JSON.parse(localStorage.getItem('names'));
    for (const iterator of names) {
      this.listOfNames.push(iterator);
    }
    return this.listOfNames;
  }

}
