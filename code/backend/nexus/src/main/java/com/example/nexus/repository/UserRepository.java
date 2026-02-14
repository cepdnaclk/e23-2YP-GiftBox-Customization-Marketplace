package com.example.nexus.repository;

import com.example.nexus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Used for Logging In
    Optional<User> findByUsername(String username);
    
    // Used for Password Recovery and Registration checks
    Optional<User> findByEmail(String email);
}