import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { ContentComponent } from './content/content.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentUploadDownloadComponent } from './document-upload-download/document-upload-download.component';
import { DocumentGridComponent } from './document-grid/document-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    WelcomeContentComponent,
    ContentComponent,
    AuthContentComponent,
    ButtonsComponent,
    DocumentUploadDownloadComponent,
    DocumentGridComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
