import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-selector',
  templateUrl: './action-selector.component.html',
  styleUrls: ['./action-selector.component.css']
})
export class ActionSelectorComponent implements OnInit {
  myControl: any;
  filteredOptions: string;

  constructor() { }

  ngOnInit() {
  }

}
