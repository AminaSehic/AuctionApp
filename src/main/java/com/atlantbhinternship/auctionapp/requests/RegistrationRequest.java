package com.atlantbhinternship.auctionapp.requests;

import lombok.*;

@Data
@AllArgsConstructor
public class RegistrationRequest {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
}