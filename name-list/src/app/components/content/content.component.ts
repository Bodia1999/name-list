import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  array = [];
  constructor(
    private apiService: ApiService,
    private renderer: Renderer2,
    private appComponent: AppComponent
    ) { }

  ngOnInit() {
    this.array = this.appComponent.names;
    this.onChange('ASC');
  }

  onChange(valueFromSelect) {
    let tempArray = [];
    for (let name of this.array) {
      tempArray.push(name.toLowerCase());
    }
    tempArray.sort();
    if (valueFromSelect === 'DESC') {
      tempArray.reverse();
    }
    this.array = tempArray;

  }
}
