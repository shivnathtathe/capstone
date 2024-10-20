import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

}
