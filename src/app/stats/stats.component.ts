import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData();
    this.data = (JSON.parse(localStorage.getItem('data')).herren.stats);
    console.log(this.data);
  }

}
