import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FileUploaderService } from '../file-uploader.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-document-grid',
  templateUrl: './document-grid.component.html',
  styleUrls: ['./document-grid.component.css']
})
export class DocumentGridComponent implements OnInit{
  tableData :any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['id', 'documentName', 'uploadDate','uploadUser'];
  dataSource = new MatTableDataSource();
  constructor(private fileuploadService:FileUploaderService,private basichttp:HttpClient ){}

  selectedFile: File | null = null;
  @Output() onUploadDocEvent = new EventEmitter();
  componentToShow: string = "uploads";
	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }
  ngOnInit(){
    this.getData();
    

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getData() {
    this.fileuploadService.getdocuments().subscribe((response)=>{this.tableData=response;
     let filterData=this.tableData!.data.filter((x: { uploadDate: null; }) =>x.uploadDate!=null)
     console.log(filterData);
     this.dataSource=new MatTableDataSource(filterData);

      console.log(this.dataSource);
    });
  }

  downloadDoc(row :any){
    console.log(row);
    this.fileuploadService.getdocument(row!.id).subscribe((response)=>{
      let res=response;
      this.downloadPdf(res);
      console.log(this.dataSource);
    });
  }

  
  downloadPdf(res: any): any {
    const blob = new Blob([res], { type: 'application/octet-stream' });

    // You can change the filename to be dynamic based on the file name received from the server.
    const filename = 'filename.ext';

    if (window.navigator ){
      // For other browsers
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      // Append the anchor to the body to initiate the download
      document.body.appendChild(link);
      link.click();

      // Clean up the temporary object url
      window.URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    }

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

  }

  uploadDocument(): void {

    this.onUpload(this.selectedFile);

  }

  onUpload(selectedFile: any)  {
    console.log(selectedFile)
      if (selectedFile) {
        this.fileuploadService.uploadFile(selectedFile).subscribe(
          (response: any) => {
            console.log('File uploaded successfully:', response);
            this.getData();
            // Add any logic here to handle the server response after successful upload
          },
          (error: any) => {
            console.error('Error uploading file:', error);
            // Add any error handling logic here
          }
        );
      } else {
        console.log('No file selected.');
      }    console.log('Uploading document...',selectedFile);
    }

}
