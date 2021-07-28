package com.atlantbhinternship.auctionapp.services;

import com.atlantbhinternship.auctionapp.models.Product;
import com.atlantbhinternship.auctionapp.repositories.ProductRepository;
import com.atlantbhinternship.auctionapp.requests.ProductRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product saveProduct(ProductRequest productRequest) {
        Product product = new Product(productRequest.getName());
        return productRepository.save(product);
    }

    public Product findProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        }
        return null;
    }

    public List<Product> findByCategory(Long category) {
        return productRepository.findProductsByCategoryId(category);
    }
}