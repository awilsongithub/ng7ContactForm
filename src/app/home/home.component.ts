import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;

  constructor(private data: DataService) { 
  }

  // lifecycle hook. add custom code to execute
  ngOnInit() { 
    this.data.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

}
