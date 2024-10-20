import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgIf,NgFor } from '@angular/common';
import { PdfService } from '../../_services/pdf.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  semesterId!:any
  constructor(private route: ActivatedRoute,
    private pdfService:PdfService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.semesterId = +params['id'];
    });
  }

  expandedSection: string | null = null;

  toggleExpansion(section: string) {
    if (this.expandedSection === section) {
      this.expandedSection = null; // Collapse if the same section is clicked again
    } else {
      this.expandedSection = section; // Expand the clicked section
    }
  }
  setPdfName(pdfName:any){
    this.pdfService.currentPdfName = pdfName;
  }
  
}
  
