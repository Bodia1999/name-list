import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"'],
  styleUrls: ['./app.component.css'
]})
export class AppComponent implements OnInit {
  names = [];

 show: boolean = false;
  constructor(private apiService: ApiService) {
   }

   ngOnInit() {
     this.names = this.apiService.showAllItems();
     console.log(this.names);
   }
  isOpened() {
    this.show = !this.show;
    console.log(this.show);
  }


}


