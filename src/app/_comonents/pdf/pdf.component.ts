import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../_services/pdf.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent implements OnInit{

  pdfUrl!: SafeResourceUrl;
  constructor(private pdfService: PdfService,
    private sanitizer: DomSanitizer){}
  ngOnInit(): void {
      console.log(this.pdfService.currentPdfName);
      const unsafeUrl = this.pdfService.currentPdfName;
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
  
}
