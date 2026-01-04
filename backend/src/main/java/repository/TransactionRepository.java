package com.genz.backend.repository;

import com.genz.backend.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findByAccountIdOrderByTransactionDateDesc(String accountId);
}
