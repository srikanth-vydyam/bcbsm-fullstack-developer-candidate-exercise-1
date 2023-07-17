package com.bcbsm.coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableAutoConfiguration()
public class BcbsmCodingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BcbsmCodingApplication.class, args);
	}

}
