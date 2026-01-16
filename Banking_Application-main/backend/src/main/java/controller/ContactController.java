package com.genz.backend.controller;

import com.genz.backend.model.ContactMessage;
import com.genz.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody ContactMessage message) {
        message.setSentAt(LocalDateTime.now());
        contactRepository.save(message);
        return ResponseEntity.ok("Message sent");
    }

    @GetMapping("/all")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactRepository.findAll());
    }
}
