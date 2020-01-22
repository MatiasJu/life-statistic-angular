import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MaterialIconService} from '../material-icon.service';


@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  iconSelected = 'videogame_asset';

  constructor( public materialIconService: MaterialIconService) { }

  ngOnInit() {
    this.materialIconService.getMaterialIcons().subscribe(json => {
      json['categories'].forEach(cat => {
        cat['icons'].forEach( icon => {
          this.options.push(icon['ligature']);
        });
      });
    }, error => console.log(error),
      () => {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
    });



  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
