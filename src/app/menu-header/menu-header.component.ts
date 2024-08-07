import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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
export class MenuHeaderComponent implements OnInit {
  userName = sessionStorage.getItem('Username');
  userRole = sessionStorage.getItem('Role');
  title = "Daddy's Place";
  showFiller = false;
  isLogIn: boolean = false;

  constructor(
    private router: Router,
  ){}
  ngOnInit(): void {
    this.isLogIn = Number(sessionStorage.getItem('UserId')) ? true: false;
  }


  logout() {
    sessionStorage.clear();
    window.location.replace("http://localhost:4200/user-login");
  }
}

