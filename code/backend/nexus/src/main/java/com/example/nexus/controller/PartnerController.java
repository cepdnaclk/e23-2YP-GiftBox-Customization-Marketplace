package com.example.nexus.controller;

import com.example.nexus.model.Partner;
import com.example.nexus.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partners")
// Allows your React app (running on port 3000) to communicate with this backend
@CrossOrigin(origins = "http://localhost:3000") 
public class PartnerController {

    @Autowired
    private PartnerRepository partnerRepository;

    /**
     * Fetches all partners from the database.
     * Used by both the main Partners page and the Pending Requests page.
     */
    @GetMapping
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    /**
     * Updates the status of a specific partner (Approve or Reject).
     * @param id The unique ID of the partner to update.
     * @param status The new status value (e.g., 'ACTIVE' or 'REJECTED').
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<Partner> updateStatus(
            @PathVariable Integer id, 
            @RequestParam String status) {
        
        // 1. Retrieve the partner record by ID, or throw an error if not found
        Partner partner = partnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Partner not found with id: " + id));

        // 2. Modify the status field
        partner.setStatus(status);
        
        // 3. Save the updated record back to the MariaDB/MySQL database
        Partner updatedPartner = partnerRepository.save(partner);
        
        // 4. Return the updated object with a 200 OK response
        return ResponseEntity.ok(updatedPartner);
    }
}