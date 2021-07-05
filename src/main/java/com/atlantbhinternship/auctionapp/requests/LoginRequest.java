package com.atlantbhinternship.auctionapp.requests;

import lombok.*;

@Data
@AllArgsConstructor
public class LoginRequest {
    private String email;
    private String password;
}