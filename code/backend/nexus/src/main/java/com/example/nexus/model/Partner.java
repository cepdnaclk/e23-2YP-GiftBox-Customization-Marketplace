package com.example.nexus.model;

import jakarta.persistence.*;

@Entity
@Table(name = "partners") // Matches your database table name exactly
public class Partner {

    @Id
    @Column(name = "partner_id")
    private int partnerId;

    @Column(name = "shop_name")
    private String shopName;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "shop_address")
    private String shopAddress;

    // 'verification_id' in DB -> 'brNo' in Java (Business Registration Number)
    @Column(name = "verification_id")
    private String brNo;

    @Column(name = "status")
    private String status; // Values will be 'ACTIVE' or 'PENDING'

    // Default Constructor
    public Partner() {
    }

    // Getters and Setters (Required for Spring Boot to work with the data)
    public int getPartnerId() { return partnerId; }
    public void setPartnerId(int partnerId) { this.partnerId = partnerId; }

    public String getShopName() { return shopName; }
    public void setShopName(String shopName) { this.shopName = shopName; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getShopAddress() { return shopAddress; }
    public void setShopAddress(String shopAddress) { this.shopAddress = shopAddress; }

    public String getBrNo() { return brNo; }
    public void setBrNo(String brNo) { this.brNo = brNo; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}