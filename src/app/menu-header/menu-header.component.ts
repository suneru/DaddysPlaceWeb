import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CommonModule } from '@angular/common';
import {  } from '@angular/common';
@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [RouterLink, MeterialModule, RouterOutlet,CommonModule],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
  userName = sessionStorage.getItem('Username');
  userRole = sessionStorage.getItem('Role');
  title = "Daddy's Place";
  showFiller = false;
}

