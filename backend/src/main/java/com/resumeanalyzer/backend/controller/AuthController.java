package com.resumeanalyzer.backend.controller;

import com.resumeanalyzer.backend.dto.LoginRequest;
import com.resumeanalyzer.backend.dto.RegisterRequest;
import com.resumeanalyzer.backend.entity.User;
import com.resumeanalyzer.backend.service.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(
    originPatterns = {
        "http://localhost:5173",
        "https://*.vercel.app"
    }
)
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        try {
            User user = authService.register(request);

            return ResponseEntity.status(HttpStatus.CREATED).body(
                    "Registration successful"
            );

        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        boolean authenticated = authService.login(request);

        if (!authenticated) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }

        return ResponseEntity.ok("Login successful");
    }
}