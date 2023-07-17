import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadDownloadComponent } from './document-upload-download.component';

describe('DocumentUploadDownloadComponent', () => {
  let component: DocumentUploadDownloadComponent;
  let fixture: ComponentFixture<DocumentUploadDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentUploadDownloadComponent]
    });
    fixture = TestBed.createComponent(DocumentUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
