package com.atlantbhinternship.auctionapp.controllers;

import com.atlantbhinternship.auctionapp.models.ErrorMessage;
import com.atlantbhinternship.auctionapp.models.Product;
import com.atlantbhinternship.auctionapp.requests.ProductRequest;
import com.atlantbhinternship.auctionapp.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/products")
@AllArgsConstructor
public class ProductController {
    public ProductService productService;

    @GetMapping("/")
    public ResponseEntity<?> getProducts(@RequestParam(required = false) Long category) {
        List<Product> products;
        if (category != null) {
            products = productService.findByCategory(category);
        } else {
            products = productService.findAll();
        }
        return ResponseEntity.ok().body(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        Product product = productService.findProductById(id);
        if (product == null) {
            return ResponseEntity.badRequest().body(new ErrorMessage(HttpStatus.BAD_REQUEST.value(), String.format("Product with id: %s does not exist", id)));
        }
        return ResponseEntity.ok().body(product);
    }

    @PostMapping("/")
    public ResponseEntity<?> addProduct(@RequestBody ProductRequest productRequest) {
        Product product = productService.saveProduct(productRequest);
        return ResponseEntity.created(URI.create(String.format("/api/products/%s", product.getId()))).body(product);
    }
}