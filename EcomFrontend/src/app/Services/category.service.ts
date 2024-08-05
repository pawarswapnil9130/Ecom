import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {
  private apiUrl = 'http://your-backend-api-url/categories'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((resp:any)=>{
        console.log(resp);
    })
  }
}
