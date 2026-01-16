package com.genz.backend.controller;

import com.genz.backend.model.UserAccount;
import com.genz.backend.model.Transaction;
import com.genz.backend.repository.AccountRepository;
import com.genz.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // 1. Fund Transfer
    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(@RequestBody Map<String, Object> payload) {
        String fromId = (String) payload.get("fromAccountId");
        String toAccountNum = (String) payload.get("toAccountNumber"); // Can be name or number in your UI
        double amount = Double.parseDouble(payload.get("amount").toString());

        Optional<UserAccount> senderOpt = accountRepository.findById(fromId);

        // Try to find recipient by Account Number first, then Username (simulating name search)
        Optional<UserAccount> receiverOpt = accountRepository.findByAccountNumber(toAccountNum);
        if(receiverOpt.isEmpty()) {
            receiverOpt = accountRepository.findByUsername(toAccountNum);
        }

        if (senderOpt.isPresent() && receiverOpt.isPresent()) {
            UserAccount sender = senderOpt.get();
            UserAccount receiver = receiverOpt.get();

            if (sender.getBalance() < amount) {
                return ResponseEntity.badRequest().body("Insufficient funds");
            }

            // Update Balances
            sender.setBalance(sender.getBalance() - amount);
            receiver.setBalance(receiver.getBalance() + amount);

            accountRepository.save(sender);
            accountRepository.save(receiver);

            // Create Debit Transaction for Sender
            Transaction debit = new Transaction();
            debit.setAccountId(sender.getId());
            debit.setType("DEBIT");
            debit.setAmount(amount);
            debit.setDescription("Transfer to " + receiver.getFullName());
            debit.setTransactionDate(LocalDateTime.now());
            transactionRepository.save(debit);

            // Create Credit Transaction for Receiver
            Transaction credit = new Transaction();
            credit.setAccountId(receiver.getId());
            credit.setType("CREDIT");
            credit.setAmount(amount);
            credit.setDescription("Transfer from " + sender.getFullName());
            credit.setTransactionDate(LocalDateTime.now());
            transactionRepository.save(credit);

            return ResponseEntity.ok("Transfer successful");
        }
        return ResponseEntity.badRequest().body("Invalid account details");
    }

    // 2. Deposit
    @PostMapping("/deposit")
    public ResponseEntity<?> deposit(@RequestBody Map<String, Object> payload) {
        String accountId = (String) payload.get("accountId");
        double amount = Double.parseDouble(payload.get("amount").toString());

        Optional<UserAccount> accountOpt = accountRepository.findById(accountId);
        if (accountOpt.isPresent()) {
            UserAccount account = accountOpt.get();
            account.setBalance(account.getBalance() + amount);
            accountRepository.save(account);

            Transaction t = new Transaction();
            t.setAccountId(accountId);
            t.setType("CREDIT");
            t.setAmount(amount);
            t.setDescription("Cash Deposit");
            t.setTransactionDate(LocalDateTime.now());
            transactionRepository.save(t);

            return ResponseEntity.ok("Deposit successful");
        }
        return ResponseEntity.badRequest().body("Account not found");
    }

    // Note: Add similar logic for Withdraw and PayBills if needed,
    // essentially just creating DEBIT transactions and reducing balance.
}
