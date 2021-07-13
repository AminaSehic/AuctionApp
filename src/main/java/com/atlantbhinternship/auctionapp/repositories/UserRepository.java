package com.atlantbhinternship.auctionapp.repositories;

import com.atlantbhinternship.auctionapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);

    Boolean existsByEmail(String email);

    Optional<User> findByEmailAndPasswordHash(String email, String passwordHash);
}