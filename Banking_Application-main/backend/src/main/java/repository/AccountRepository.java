package com.genz.backend.repository;

import com.genz.backend.model.UserAccount;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface AccountRepository extends MongoRepository<UserAccount, String> {
    Optional<UserAccount> findByUsername(String username);
    Optional<UserAccount> findByUsernameAndPassword(String username, String password);
    Optional<UserAccount> findByAccountNumber(String accountNumber);
}
