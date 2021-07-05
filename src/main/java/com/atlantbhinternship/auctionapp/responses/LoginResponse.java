package com.atlantbhinternship.auctionapp.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
   private String token;
   private UserResponse userResponse;
}