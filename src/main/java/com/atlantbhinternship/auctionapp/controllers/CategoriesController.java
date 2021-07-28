package com.atlantbhinternship.auctionapp.controllers;

import com.atlantbhinternship.auctionapp.models.Category;
import com.atlantbhinternship.auctionapp.models.ErrorMessage;
import com.atlantbhinternship.auctionapp.requests.CategoryRequest;
import com.atlantbhinternship.auctionapp.services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;

@RestController
@RequestMapping(value = "/api/categories")
@AllArgsConstructor
public class CategoriesController {
    public CategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<?> getCategories() {
        ArrayList<Category> categories = categoryService.findAll();
        return ResponseEntity.ok().body(categories);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable Long id) {
        Category category = categoryService.findCategoryById(id);
        if (category == null) {
            return ResponseEntity.badRequest().body(new ErrorMessage(HttpStatus.BAD_REQUEST.value(), String.format("Category with id: %s does not exist", id)));

        }
        return ResponseEntity.ok().body(category);
    }
    @PostMapping("/")
    public ResponseEntity<?> addCategory(@RequestBody CategoryRequest categoryRequest) {
        Category category = categoryService.saveCategory(categoryRequest);
        return ResponseEntity.created(URI.create(String.format("/api/categories/%s", category.getId()))).body(category);
    }
}