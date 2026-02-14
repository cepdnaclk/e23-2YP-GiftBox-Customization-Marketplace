package com.example.nexus.controller;

import com.example.nexus.model.User;
import com.example.nexus.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Connects to React Vite default port
public class AuthController {

    @Autowired private AuthService authService;

    // Helper to format JSON responses
    private Map<String, Object> createResponse(String message, boolean success) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);
        response.put("success", success);
        return response;
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody User user) {
        String result = authService.register(user);
        return createResponse(result, result.equals("Account Created"));
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        // Now logging in with 'username' and 'password'
        String result = authService.login(body.get("username"), body.get("password"));
        return createResponse(result, result.equals("Login Successful"));
    }

    @PostMapping("/send-otp")
    public Map<String, Object> sendOtp(@RequestBody Map<String, String> body) {
        String result = authService.sendResetOtp(body.get("email"));
        return createResponse(result, result.equals("OTP sent"));
    }

    @PostMapping("/verify-otp")
    public Map<String, Object> verifyOtp(@RequestBody Map<String, String> body) {
        String result = authService.verifyOtp(body.get("email"), body.get("otp"));
        return createResponse(result, result.equals("OTP Verified"));
    }

    @PostMapping("/reset-password")
    public Map<String, Object> resetPassword(@RequestBody Map<String, String> body) {
        String result = authService.resetPassword(body.get("email"), body.get("newPassword"));
        return createResponse(result, result.equals("Password reset successfully"));
    }
}