package com.atlantbhinternship.auctionapp.controllers;

import com.atlantbhinternship.auctionapp.models.ErrorMessage;
import com.atlantbhinternship.auctionapp.models.User;
import com.atlantbhinternship.auctionapp.models.ConfirmationToken;
import com.atlantbhinternship.auctionapp.requests.LoginRequest;
import com.atlantbhinternship.auctionapp.responses.LoginResponse;
import com.atlantbhinternship.auctionapp.responses.RegistrationResponse;
import com.atlantbhinternship.auctionapp.responses.UserResponse;
import com.atlantbhinternship.auctionapp.services.AppUserService;
import com.atlantbhinternship.auctionapp.services.ConfirmationTokenService;
import com.atlantbhinternship.auctionapp.requests.RegistrationRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/api", method = RequestMethod.GET)
@AllArgsConstructor
public class AuthenticationController {
    private final AppUserService appUserService;
    private final ConfirmationTokenService confirmationTokenService;

    @PostMapping(path = "/registration")
    public ResponseEntity<?> register(@Valid @RequestBody RegistrationRequest request) {
        if (appUserService.exist(request)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body((new ErrorMessage(HttpStatus.BAD_REQUEST.value(), "User with that email already exists!")));
        }
        User result = appUserService.createUserAccount(request);
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/**")
                .buildAndExpand(result.getUsername()).toUri();
        return ResponseEntity.created(location).body(
                new RegistrationResponse(new UserResponse(
                        result.getId(),
                        result.getFirstName(),
                        result.getLastName(),
                        result.getEmail()
                )));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String jwt = appUserService.signInUser(loginRequest);
        try {
            UserResponse userResponse = new UserResponse(appUserService.getUserByUsername(loginRequest.getEmail()));
            confirmationTokenService.saveConfirmationToken(new ConfirmationToken(jwt, appUserService.findUserById(userResponse.getId())));
            return ResponseEntity.ok(new LoginResponse(jwt, userResponse));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body((new ErrorMessage(HttpStatus.BAD_REQUEST.value(), e.getMessage())));
        }
    }
}
