package com.genz.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "accounts")
public class UserAccount {
    @Id
    private String id;

    // Personal Details
    private String fullName;
    private String dob;
    private String gender;
    private String nationality;
    private String nicPassport;
    private String permanentAddress;
    private String currentAddress;
    private String email;
    private String mobile;
    private String occupation;

    // Account Details
    private String accountType;
    private double initialDeposit;
    private double balance; // Current Balance
    private String savingsGoal;
    private double targetAmount;
    private String accountNickname;

    // Security (Login)
    private String username;
    private String password; // In production, encrypt this!
    private String pin;

    // System fields
    private LocalDateTime createdAt;
    private String accountNumber; // Generated automatically
}
