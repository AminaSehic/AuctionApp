package com.atlantbhinternship.auctionapp.responses;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Data
public class LoginResponse {
   private String token;
   private UserResponse userResponse;


}
