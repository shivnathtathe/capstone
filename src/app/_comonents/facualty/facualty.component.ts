import { Component } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-facualty',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './facualty.component.html',
  styleUrl: './facualty.component.css'
})
export class FacualtyComponent {

  isDisbaled: boolean= true;  
  pritnTheForm(){
    const printContents = document.getElementById('printableArea')?.innerHTML; 
    const originalContents = document.body.innerHTML;

    if (printContents) {
      const printDiv = document.createElement('div');
      printDiv.innerHTML = printContents;
      
      // Apply styles to the printDiv
      printDiv.style.border = '0px solid #000'; // 1px solid black border
      printDiv.style.padding = '10px'; // 10px padding
      printDiv.style.backgroundColor = '#fff'; // Optional: white background
      printDiv.style.margin = '10px'; // Optional: remove margin to fit properly
      printDiv.style.display ='flex';
      printDiv.style.justifyContent = 'center';
      printDiv.style.alignItems ='center';
      printDiv.style.flexDirection = 'column';
      printDiv.style.width = '100vw';

      // Replace the body content with the styled printDiv
      document.body.innerHTML = printDiv.outerHTML;
      window.print(); 
      document.body.innerHTML = originalContents; 
      window.location.reload();
    }
  }
  editForm(){
    this.isDisbaled = true;
  }
}
