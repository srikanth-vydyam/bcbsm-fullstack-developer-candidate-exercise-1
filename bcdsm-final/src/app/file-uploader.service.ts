import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  private apiUrl = 'http://localhost:8081/document'; 

  constructor(private http: HttpClient) {}

  uploadFile(file: File): any {
    let headers: any = {};
    
    headers = {"Authorization": "Bearer " + window.localStorage.getItem("auth_token")};
      const formData: FormData = new FormData();
    formData.append('name',file.name);
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl}/uploadDocument`, formData,{headers});
  }
  //this.userManagementService.getUserDefaults().subscribe((data) => {})
  getdocuments(){
    let headers: any = {};
    
    headers = {"Authorization": "Bearer " + window.localStorage.getItem("auth_token")};
    console.log(headers)
    return this.http.get(`${this.apiUrl}/getDocumentsList`,{headers});
  }
  
  getdocument(id:any){
    const httpOptions = {
      responseType: 'arraybuffer' as 'json',
    };
    let headers: any = {responseType: 'arraybuffer' as 'json',};
    const formData: FormData = new FormData();
    formData.append('id',id);
   
    headers = {"Authorization": "Bearer " + window.localStorage.getItem("auth_token")};
    console.log(headers)
    return this.http.post(`${this.apiUrl}/getDocument`,formData,{headers});
  }
}
