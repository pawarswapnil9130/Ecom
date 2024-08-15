import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-toolbar.component.html',
  styleUrls: ['./category-toolbar.component.css']
})
export class CategoryToolbarComponent implements OnInit {
  categories: any[] = []; // Define the categories array
  subCategories: any[] = [];
  activeCategoryId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails(); 
  }

  public toggleSubcategories(categoryId: number) {
    if (this.activeCategoryId === categoryId) {
      // If the clicked category is already active, hide it
      this.activeCategoryId = null;
      this.subCategories = [];
    } else {
      // If a different category is clicked, show its subcategories
      this.activeCategoryId = categoryId;
      this.fetchSubcategories(categoryId);
    }
  }

  public fetchDetails() {
    this.http.get('https://localhost:7102/api/Category/GetAllCategories').subscribe((resp: any) => {
      console.log(resp); // Log the response
      this.categories = resp; // Assign the response to categories
    }, error => {
      console.error('Error fetching categories:', error); 
    });
  }

  public fetchSubcategories(categoryId: number) {
    this.http.get(`https://localhost:7102/api/Category/GetSubCategoriesByCategoryId?categoryId=${categoryId}`)
      .subscribe((resp: any) => {
        console.log(resp);
        this.subCategories = resp;
      });
  }
}
