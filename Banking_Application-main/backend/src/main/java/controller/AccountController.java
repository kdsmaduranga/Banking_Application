package com.genz.backend.controller;

import com.genz.backend.model.UserAccount;
import com.genz.backend.model.Transaction;
import com.genz.backend.repository.AccountRepository;
import com.genz.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Random;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping("/apply")
    public ResponseEntity<?> createAccount(@RequestBody UserAccount account) {
        // 1. Check if username exists
        if (accountRepository.findByUsername(account.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // 2. Set System Fields
        account.setCreatedAt(LocalDateTime.now());
        account.setBalance(account.getInitialDeposit());

        // Generate a random 10-digit account number
        Random random = new Random();
        String accNum = String.format("%010d", Math.abs(random.nextLong() % 10000000000L));
        account.setAccountNumber(accNum);

        // 3. Save Account
        UserAccount savedAccount = accountRepository.save(account);

        // 4. Record Initial Deposit as a Transaction
        if (account.getInitialDeposit() > 0) {
            Transaction t = new Transaction();
            t.setAccountId(savedAccount.getId());
            t.setType("CREDIT");
            t.setAmount(account.getInitialDeposit());
            t.setDescription("Initial Deposit");
            t.setTransactionDate(LocalDateTime.now());
            transactionRepository.save(t);
        }

        return ResponseEntity.ok(savedAccount);
    }
}
