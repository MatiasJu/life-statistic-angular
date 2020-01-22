import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialIconService {

  constructor(private http: HttpClient) { }

  getMaterialIcons() {
    return this.http.get("./assets/icons.json");
  }
}
