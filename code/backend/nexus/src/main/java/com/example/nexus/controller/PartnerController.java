package com.example.nexus.controller;

import com.example.nexus.model.Partner;
import com.example.nexus.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/partners") // This sets the base URL for this controller
@CrossOrigin(origins = "http://localhost:3000") // Crucial: Allows your React app to access this API
public class PartnerController {

    @Autowired
    private PartnerRepository partnerRepository;

    // This method handles GET requests to http://localhost:8080/api/partners
    @GetMapping
    public List<Partner> getAllPartners() {
        // Fetches all partners (both ACTIVE and PENDING) from the database
        return partnerRepository.findAll();
    }
}