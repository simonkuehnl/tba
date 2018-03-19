import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData();
    this.data = (JSON.parse(localStorage.getItem('data')).herren.standing);
    console.log(this.data);
  }

}
