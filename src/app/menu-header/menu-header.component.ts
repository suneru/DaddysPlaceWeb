import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MeterialModule } from '../../_module/Meterial.Module';


@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [RouterLink, MeterialModule, RouterOutlet],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
  title = "Daddy's Place";
  userName = "Admin";
  showFiller = false;
}
