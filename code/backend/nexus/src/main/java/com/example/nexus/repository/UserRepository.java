package com.example.nexus.repository;

import com.example.nexus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // This automagically generates the SQL: 
    // SELECT * FROM users WHERE username = ? AND password_hash = ?
    Optional<User> findByUsernameAndPassword(String username, String password);
}