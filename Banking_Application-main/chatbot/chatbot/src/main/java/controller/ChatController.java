package com.genz.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.core.io.ClassPathResource;

import java.util.Map;
import java.util.HashMap;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend
public class ChatController {

    private final String apiKey;
    private final RestTemplate restTemplate;

    public ChatController() {
        try {
            ClassPathResource resource = new ClassPathResource("api_key.txt");
            this.apiKey = Files.readString(resource.getFile().toPath()).trim();
            if (apiKey.isEmpty()) {
                throw new RuntimeException("API key file is empty");
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to read API key from file: " + e.getMessage());
        }
        this.restTemplate = new RestTemplate();
    }

    @PostMapping("/message")
    public ResponseEntity<String> sendMessage(@RequestBody ChatRequest request) {
        try {
            String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=" + apiKey;

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> part = new HashMap<>();
            part.put("text", request.getMessage());

            Map<String, Object> content = new HashMap<>();
            content.put("parts", new Object[]{part});

            Map<String, Object> body = new HashMap<>();
            body.put("contents", new Object[]{content});

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                Map<String, Object> responseBody = response.getBody();
                if (responseBody.containsKey("candidates")) {
                    Object[] candidates = (Object[]) responseBody.get("candidates");
                    if (candidates.length > 0) {
                        Map<String, Object> candidate = (Map<String, Object>) candidates[0];
                        if (candidate.containsKey("content")) {
                            Map<String, Object> contentResp = (Map<String, Object>) candidate.get("content");
                            if (contentResp.containsKey("parts")) {
                                Object[] parts = (Object[]) contentResp.get("parts");
                                if (parts.length > 0) {
                                    Map<String, Object> partResp = (Map<String, Object>) parts[0];
                                    String text = (String) partResp.get("text");
                                    return ResponseEntity.ok(text);
                                }
                            }
                        }
                    }
                }
            }
            return ResponseEntity.internalServerError().body("No response from AI");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error generating response: " + e.getMessage());
        }
    }

    public static class ChatRequest {
        private String message;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}