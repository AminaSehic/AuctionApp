package com.atlantbhinternship.auctionapp.responses;

import com.atlantbhinternship.auctionapp.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
    private Long id;
    private String name;
    private String img_url;

    public ProductResponse(Product p) {
        this.id = p.getId();
        this.name = p.getName();
        this.img_url = p.getImg_url();
    }
}