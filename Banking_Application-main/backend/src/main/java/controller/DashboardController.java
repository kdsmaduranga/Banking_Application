package com.genz.backend.controller;

import com.genz.backend.model.UserAccount;
import com.genz.backend.model.Transaction;
import com.genz.backend.repository.AccountRepository;
import com.genz.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping("/{id}")
    public ResponseEntity<?> getDashboardData(@PathVariable String id) {
        Optional<UserAccount> accountOpt = accountRepository.findById(id);

        if (accountOpt.isPresent()) {
            UserAccount account = accountOpt.get();
            List<Transaction> transactions = transactionRepository.findByAccountIdOrderByTransactionDateDesc(id);

            Map<String, Object> response = new HashMap<>();
            response.put("account", account);
            response.put("transactions", transactions);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
