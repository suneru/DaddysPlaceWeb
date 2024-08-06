import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './_service/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DaddysPlaceWeb';
}
