import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standings-tile',
  templateUrl: './standings-tile.component.html',
  styleUrls: ['./standings-tile.component.css']
})
export class StandingsTileComponent implements OnInit {

  @Input() place;
  @Input() team;
  @Input() points;

  constructor() { }

  ngOnInit() {
  }

}
