import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  data;

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get('https://pwa-demo-b18f1.firebaseio.com/data.json')
    .subscribe(data => {localStorage.setItem('data', JSON.stringify(data))})
  }
}
