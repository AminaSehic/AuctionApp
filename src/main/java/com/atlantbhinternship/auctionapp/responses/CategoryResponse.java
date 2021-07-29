package com.atlantbhinternship.auctionapp.responses;

import com.atlantbhinternship.auctionapp.models.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponse {
    private Long id;
    private String name;
    private CategoryResponse parent;

    public CategoryResponse(Category c) {
        this.id = c.getId();
        this.name = c.getName();
        this.parent = new CategoryResponse(c.getParent());
    }
}