import { Component } from '@angular/core';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer'

@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [PdfJsViewerModule],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {

}
