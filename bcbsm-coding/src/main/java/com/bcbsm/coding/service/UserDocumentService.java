package com.bcbsm.coding.service;

import org.springframework.web.multipart.MultipartFile;

import com.bcbsm.coding.Dto.Response;

public interface UserDocumentService {

	Response saveUserDocument(String name, MultipartFile file, String username);

	Response fetchAllUserDocuments();

	byte[] findByDocumentId(int intValue);

}
