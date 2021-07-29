package com.atlantbhinternship.auctionapp.services;

import com.atlantbhinternship.auctionapp.models.Category;
import com.atlantbhinternship.auctionapp.repositories.CategoryRepository;
import com.atlantbhinternship.auctionapp.requests.CategoryRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Category findCategoryById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        if (category.isPresent()) {
            return category.get();
        }
        return null;
    }

    public ArrayList<Category> findAll() {
        return (ArrayList<Category>) categoryRepository.findAll();
    }

    public Category saveCategory(CategoryRequest categoryRequest) {
        Category parent = categoryRepository.findById(categoryRequest.getParentId()).orElse(null);
        Category category = new Category(categoryRequest.getName(), parent);
        return categoryRepository.save(category);
    }
}