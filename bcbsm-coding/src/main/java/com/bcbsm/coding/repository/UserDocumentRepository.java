package com.bcbsm.coding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bcbsm.coding.model.UserUploadDocument;

@Repository
public interface UserDocumentRepository extends MongoRepository<UserUploadDocument, Integer>{

}
