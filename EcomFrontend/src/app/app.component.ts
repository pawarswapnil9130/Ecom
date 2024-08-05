import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CategoryService } from './Services/category.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomepageComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'EcomFrontend';
}
