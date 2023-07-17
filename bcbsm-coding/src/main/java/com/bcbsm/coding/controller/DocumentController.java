package com.bcbsm.coding.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bcbsm.coding.Dto.Response;
import com.bcbsm.coding.service.JwtAuthService;
import com.bcbsm.coding.service.UserDocumentService;

@RestController
@RequestMapping("/document")
public class DocumentController {
	@Autowired
	private UserDocumentService userDocumentService;

	@Autowired
	private JwtAuthService jwtService;

	@PostMapping("/uploadDocument")
	public Response uploadDocument(@RequestParam("name") String name, @RequestParam("file") MultipartFile file,
			@RequestHeader("Authorization") String token) throws IOException {
		String username = null;
		String jwt = null;

		if (token != null && token.startsWith("Bearer")) {
			jwt = token.substring(7);
			username = jwtService.extractUsername(jwt);
		}

		return userDocumentService.saveUserDocument(name, file, username);
	}

	@GetMapping("/getDocumentsList")
	public Response getDocumentsList() {
		return userDocumentService.fetchAllUserDocuments();
	}

	@PostMapping("/getDocument")
	public ResponseEntity<byte[]> getDocument(@RequestParam Long id) {
		byte[] fileData = userDocumentService.findByDocumentId(id.intValue());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDisposition(ContentDisposition.builder("attachment").filename("filename.ext").build());

        return new ResponseEntity<>(fileData, headers, HttpStatus.OK);
		
	}

	

}
