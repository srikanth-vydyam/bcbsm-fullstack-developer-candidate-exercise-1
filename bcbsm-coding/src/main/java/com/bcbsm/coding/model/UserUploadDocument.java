package com.bcbsm.coding.model;

import java.util.Date;

import org.bson.types.Binary;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "UserUploadDocument")
public class UserUploadDocument {
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";

		@Id
		private long id;
		private String documentName;
		private Binary file;
		
		private String uploadUser;

		@CreatedDate
		private Date uploadDate;
		

		
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public Binary getFile() {
			return file;
		}
		public void setFile(Binary file) {
			this.file = file;
		}
	
		public String getDocumentName() {
			return documentName;
		}
		public void setDocumentName(String documentName) {
			this.documentName = documentName;
		}
		public String getUploadUser() {
			return uploadUser;
		}
		public void setUploadUser(String uploadUser) {
			this.uploadUser = uploadUser;
		}
		public Date getUploadDate() {
			return uploadDate;
		}
		public void setUploadDate(Date uploadDate) {
			this.uploadDate = uploadDate;
		}
		
		
		


}
