package com.genz.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "transactions")
public class Transaction {
    @Id
    private String id;

    private String accountId; // Links to UserAccount
    private String type; // CREDIT or DEBIT
    private double amount;
    private String description; // e.g., "Transfer to Amal", "Bill Payment"
    private LocalDateTime transactionDate;
}
