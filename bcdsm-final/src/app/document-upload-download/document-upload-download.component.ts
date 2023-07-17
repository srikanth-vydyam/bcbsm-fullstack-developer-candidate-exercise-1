import { Component, EventEmitter, Output } from '@angular/core';
import { FileUploaderService } from '../file-uploader.service';

@Component({
  selector: 'app-document-upload-download',
  templateUrl: './document-upload-download.component.html',
  styleUrls: ['./document-upload-download.component.css']
})
export class DocumentUploadDownloadComponent {
  selectedFile: File | null = null;
  @Output() onUploadDocEvent = new EventEmitter();
  componentToShow: string = "uploads";
	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }
constructor(private  fileUploadService: FileUploaderService){}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

  }

  uploadDocument(): void {

    this.onUploadDocEvent.emit(this.selectedFile);

  }

}
