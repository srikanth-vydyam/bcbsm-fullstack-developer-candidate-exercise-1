package com.bcbsm.coding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bcbsm.coding.Dto.Response;
import com.bcbsm.coding.Dto.UserAuthRequest;
import com.bcbsm.coding.service.JwtAuthService;

@RestController
@RequestMapping("/auth")
public class BcbsmAuthcController {

	@Autowired
	private JwtAuthService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/hello")
	public String helloApi() {
		return "hello";
	}

	@PostMapping("/login")
	public Response login(@RequestBody UserAuthRequest authRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		Response response = new Response();
		if (authentication.isAuthenticated()) {
			response.setData(jwtService.generateToken(authRequest.getUsername()));
			response.setSuccess(true);
			response.setMessage("User Authenticated sucessfully");
		} else {
			response.setMessage("invalid user request !");
		}
		return response;

	}

}
