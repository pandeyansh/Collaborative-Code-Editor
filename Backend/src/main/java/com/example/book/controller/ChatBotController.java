package com.example.book.controller;

import org.springframework.web.bind.annotation.*;

import com.example.book.entity.ChatMessage;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Replace with your React app's URL
public class ChatBotController {

    private List<ChatMessage> chatHistory = new ArrayList<>();

    @PostMapping("/chatbot")
    public ChatMessage getBotResponse(@RequestBody ChatMessage userMessage) {
        // Handle the user's message and return a ChatMessage response
        // You can implement your chatbot logic or call an external chatbot API here

        // For simplicity, let's echo the user's message as the bot response
        ChatMessage botResponse = new ChatMessage(userMessage.getText(), false, userMessage.getTimestamp());

        // Save the user and bot messages to chat history
        chatHistory.add(userMessage);
        chatHistory.add(botResponse);

        return botResponse;
    }

    @GetMapping("/chathistory")
    public List<ChatMessage> getChatHistory() {
        // Return the entire chat history
        return chatHistory;
    }

    @PostMapping("/savechat")
    public String saveChatHistory(@RequestBody List<ChatMessage> chatMessages) {
        // Save the entire chat history to a database or perform any other desired action
        // For simplicity, we'll just log the chat history
        System.out.println("Saving chat history: " + chatMessages);
        return "Chat history saved successfully!";
    }
}
