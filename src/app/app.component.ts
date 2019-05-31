import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  names = [];
  constructor(private apiService: ApiService) {
   }

   ngOnInit() {
      this.names = this.apiService.showAllItems();
   }
  addName(value: string) {
    if (this.checkingInput(value)) {
      return;
    }
    if (this.checkingForContaining(value)) {
      return;
    }
    this.names.push(value);
    this.apiService.storeList(this.names);
  }
  deleteName(name) {
    this.names = this.names.filter(t => t !== name);
    this.apiService.storeList(this.names);
  }

  checkingForContaining(value: string) {
    if (this.names.includes(value)) {
      alert('This name already exists');
      return true;
    }
    return false;
  }

  checkingInput(value: string): boolean {
    if (value.length === 0) {
      alert('Enter your name!');
      return true;
    }
    return false;
  }
}


