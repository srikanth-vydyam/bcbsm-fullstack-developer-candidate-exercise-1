import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { FileUploaderService } from '../file-uploader.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

	componentToShow: string = "welcome";

	constructor(private axiosService: AxiosService, private  fileUploadService: FileUploaderService) { }

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

	onLogin(input: any): void {
		this.axiosService.request(
		    "POST",
		    "auth/login",
		    {
		        username: input.login,
		        password: input.password
		    }).then(
		    response => {
          console.log(response.data.data);
		        this.axiosService.setAuthToken(response.data.data);
		        this.componentToShow = "uploads";
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "welcome";
		    }
		);

	}

  onUpload(selectedFile: any)  {
  console.log(selectedFile)
    if (selectedFile) {
      this.fileUploadService.uploadFile(selectedFile).subscribe(
        (response: any) => {
          console.log('File uploaded successfully:', response);
          this.componentToShow = "doclist";
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
