package com.atlantbhinternship.auctionapp.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class RegistrationRequest {
    private String lastName;
    private String firstName;
    private String passwordHash;
    private String email;
}
