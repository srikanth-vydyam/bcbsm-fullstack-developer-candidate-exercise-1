package com.bcbsm.coding.service;

import java.io.IOException;
import java.util.Calendar;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bcbsm.coding.Dto.Response;
import com.bcbsm.coding.model.UserUploadDocument;
import com.bcbsm.coding.repository.UserDocumentRepository;

@Service
public class UserDocumentServiceImpl implements UserDocumentService {
	@Autowired
	private UserDocumentRepository userDocumentRepository;

	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@Override
	public Response saveUserDocument(String name, MultipartFile file, String username) {
		Response response = new Response();
		UserUploadDocument document = new UserUploadDocument();
		try {
			document.setId(sequenceGeneratorService.generateSequence(UserUploadDocument.SEQUENCE_NAME));
			Calendar calendar = Calendar.getInstance();
			document.setUploadDate(calendar.getTime());
			document.setDocumentName(name);
			document.setUploadUser(username);
			document.setFile(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
			userDocumentRepository.save(document);
			response.setData(document);
			response.setMessage("Document Saved sucessfully");
		} catch (IOException e) {
			response.setMessage("Error while saving document");
		}
		return response;
	}

	@Override
	public Response fetchAllUserDocuments() {
		Response response = new Response();
		try {
			response.setData(userDocumentRepository.findAll());
			response.setMessage("Document Saved sucessfully");
		} catch (Exception e) {
			response.setMessage("Error while fetching documents");
		}
		return response;
	}

	@Override
	public byte[] findByDocumentId(int id) {
		Response response = new Response();

		try {
			Optional<UserUploadDocument> userDoc = userDocumentRepository.findById(id);
			if (userDoc.isEmpty()) {
				response.setMessage("Document not found");
			} else {

				byte[] fileData = new byte[(int) userDoc.get().getFile().length()];
				return fileData;
			}

		} catch (Exception e) {
			response.setMessage("Error while fetching document");

		}
		return null;

	}

}
