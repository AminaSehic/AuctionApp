package com.atlantbhinternship.auctionapp.controllers;

import com.atlantbhinternship.auctionapp.requests.LoginRequest;
import com.atlantbhinternship.auctionapp.requests.RegistrationRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AuthenticationControllerTest {

    @Autowired
    private AuthenticationController authenticationController;

    @Test
    public void registerTest() {
        RegistrationRequest registrationRequest = new RegistrationRequest("amina", "sehic", "pasvord", "sehic.amina11@gmail.com");
        ResponseEntity<?> responseEntity = authenticationController.register(registrationRequest);
        assertEquals(201, responseEntity.getStatusCodeValue());
    }
    @Test
    public void loginTest(){
        LoginRequest loginRequest = new LoginRequest("sehic.amina11@gmail.com", "pasvord");
        ResponseEntity<?> responseEntity = authenticationController.login(loginRequest);
        assertEquals(201, responseEntity.getStatusCodeValue());
    }
    @Test
    public void loginTest1(){
        LoginRequest loginRequest = new LoginRequest("sehic.amina11@gmail.com", "password123");
        ResponseEntity<?> responseEntity = authenticationController.login(loginRequest);
        assertEquals(400, responseEntity.getStatusCodeValue());
    }

}