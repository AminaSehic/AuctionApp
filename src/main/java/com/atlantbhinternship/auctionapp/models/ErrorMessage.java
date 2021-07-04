package com.atlantbhinternship.auctionapp.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ErrorMessage {
    private int status;
    private String message;
}
