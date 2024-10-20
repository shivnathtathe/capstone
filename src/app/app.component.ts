import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_comonents/header/header.component';
import { FooterComponent } from './_comonents/footer/footer.component';
import { DepartmentsComponent } from './_comonents/departments/departments.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,DepartmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facultyCourseFileAutogeneration';
}
