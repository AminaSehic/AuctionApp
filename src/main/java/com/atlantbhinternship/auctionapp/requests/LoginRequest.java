package com.atlantbhinternship.auctionapp.requests;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Data

public class LoginRequest {
    private String email;
    private String password;
}
