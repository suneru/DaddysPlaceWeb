import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MeterialModule } from '../../_module/Meterial.Module';


@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [RouterLink,MeterialModule],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {

}
