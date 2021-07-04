package com.atlantbhinternship.auctionapp.services;


import com.atlantbhinternship.auctionapp.models.User;
import com.atlantbhinternship.auctionapp.repositories.UserRepository;
import com.atlantbhinternship.auctionapp.requests.LoginRequest;
import com.atlantbhinternship.auctionapp.requests.RegistrationRequest;
import com.atlantbhinternship.auctionapp.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AppUserService {
    private final UserRepository userRepository;
    private final ConfirmationTokenService confirmationTokenService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;


    public User getUserByUsername(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    public User createUserAccount(RegistrationRequest registrationRequest) {
        User user = new User(registrationRequest.getFirstName(), registrationRequest.getLastName(), registrationRequest.getEmail());
        String encodedPassword = passwordEncoder.encode(registrationRequest.getPassword());
        user.setPasswordHash(encodedPassword);
        System.out.println(user.getPasswordHash());
        return userRepository.save(user);
    }

    public String signInUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtTokenProvider.generateToken(authentication);
    }

    public boolean exist(RegistrationRequest registrationRequest) {
        if (userRepository.existsByEmail(registrationRequest.getEmail())) {
            return true;
        }
        return false;
    }

    public User findUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }
}
