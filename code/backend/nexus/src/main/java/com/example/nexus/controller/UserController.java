package com.example.nexus.controller;

import com.example.nexus.model.User;
import com.example.nexus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // 1. A temporary test link to create and save a user
    @GetMapping("/add-test-user")
    public String addTestUser() {
        User newUser = new User();
        newUser.setUsername("giftbox_fan");
        newUser.setEmail("fan@giftbox.com");
        newUser.setPassword("supersecret");

        userRepository.save(newUser); // This is the magic save command!
        return "User saved successfully! Go check MySQL Workbench.";
    }

    // 2. A link to view all users we have saved
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll(); // This fetches everyone from the database!
    }
}