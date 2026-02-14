package com.example.nexus.controller;

import com.example.nexus.model.User;
import com.example.nexus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*") 
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    // We must inject the PasswordEncoder to check the encrypted password
    @Autowired
    private PasswordEncoder passwordEncoder;

    // Changed to @RequestBody assuming React is sending JSON data.
    // If React is sending URL parameters, let me know!
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        
        // 1. Find the user BY USERNAME ONLY
        Optional<User> userOpt = userRepository.findByUsername(loginRequest.getUsername());

        if(userOpt.isPresent()) {
            User user = userOpt.get();
            
            // 2. Securely check if the typed password matches the encrypted database password
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                
                // If you want to use roles, make sure to add 'private String role;' to your User.java!
                // For now, I'll return the user's name to prevent the getRole() error.
                return "Login Successful! Welcome " + user.getName();
            } else {
                return "Login Failed: Incorrect Password";
            }
        } else {
            return "Login Failed: User not found";
        }
    }
}

// A simple helper class to catch the JSON data from React
class LoginRequest {
    private String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}