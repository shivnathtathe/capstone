import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SemesterSubjectsService } from '../../_services/semestersubjects.service';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [RouterModule,NgFor,NgIf],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.css',
})
export class SemesterComponent implements OnInit{


  semesterId!: number;
  semesterData:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private subService: SemesterSubjectsService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.semesterId = +params['id'];
      console.log(this.semesterId)
      this.getSemData(this.semesterId);
    });

    
  }
  getSemData(semesterId: number): void {
    this.subService.getSemesterSubjects().subscribe({
      next: (data) => {
        this.semesterData = data[semesterId].subjects;
        console.log("Semester Data: ",this.semesterData);
      },
      error: (error) => {
        console.error('Error fetching semester subjects:', error); 
      }
    });
  }
  

  }


