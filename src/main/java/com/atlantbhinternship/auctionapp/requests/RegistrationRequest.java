package com.atlantbhinternship.auctionapp.requests;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Data
public class RegistrationRequest {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
}
