package com.atlantbhinternship.auctionapp.repositories;

import com.atlantbhinternship.auctionapp.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ProductRepository  extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);
    List<Product> findProductsByCategoryId(Long categoryId);
}