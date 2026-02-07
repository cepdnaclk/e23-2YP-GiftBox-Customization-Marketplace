package com.example.nexus.controller;

import com.example.nexus.model.User;
import com.example.nexus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
// @CrossOrigin allows your HTML file (frontend) to communicate with Java (backend)
@CrossOrigin(origins = "*") 
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password) {
        
        // This looks for the username and the PLAIN TEXT password '1234'
        Optional<User> user = userRepository.findByUsernameAndPassword(username, password);

        if(user.isPresent()) {
            return "Login Successful! Welcome " + user.get().getRole();
        } else {
            return "Login Failed";
        }
    }
}