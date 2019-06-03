import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  names = [];
  constructor(
    private apiService: ApiService,
    private appComponent: AppComponent
    ) {
    this.names = this.appComponent.names;
  }

  ngOnInit() {
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
