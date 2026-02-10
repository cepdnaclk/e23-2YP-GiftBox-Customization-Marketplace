package com.example.nexus.repository;

import com.example.nexus.model.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Integer> {
    // JpaRepository gives you standard methods like findAll(), findById(), save(), delete() for free.
    // You don't need to write any code here for basic operations.
}