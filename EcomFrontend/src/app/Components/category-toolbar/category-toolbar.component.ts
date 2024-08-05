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
  subCategories : any[] =[];
  constructor(private http: HttpClient) {}
  currentCategoryId: number | null = null;

  ngOnInit(): void {
    this.fetchDetails(); 
  }

  public fetchDetails() {
    this.http.get('https://localhost:7102/api/Category/GetAllCategories').subscribe((resp: any) => {
      console.log(resp); // Log the response
      this.categories = resp; // Assign the response to categories
    }, error => {
      console.error('Error fetching categories:', error); 
    });
  }

  public onMouseEnter(categoryId: number) {
    console.log('Hovered category ID:', categoryId); 
    this.currentCategoryId = categoryId;
    this.fetchSubcategories(categoryId);
  }

  public onMouseLeave() {
    this.currentCategoryId = null; 
    this.subCategories = []; 
  }

  public fetchSubcategories(categoryId :number)
  {

    this.http.get(`https://localhost:7102/api/Category/GetSubCategoriesByCategoryId?categoryId=${categoryId}`)
    .subscribe((resp :any)=>{
        console.log(resp);
        this.subCategories = resp;
    })
  }
}
