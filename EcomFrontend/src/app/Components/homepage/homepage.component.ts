import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { CategoryToolbarComponent } from '../category-toolbar/category-toolbar.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule,CategoryToolbarComponent], // Add MatInputModule here
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] // Corrected styleUrl to styleUrls
})
export class HomepageComponent { }
