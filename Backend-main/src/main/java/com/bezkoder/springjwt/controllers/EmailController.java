package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Email;
import com.bezkoder.springjwt.security.services.E_mailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/email")
public class EmailController {
    private final E_mailService emailService;


    public EmailController(E_mailService emailService) {
        this.emailService = emailService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Email>> getAllEmails () {
        List<Email> emails = emailService.findAllEmails();
        return new ResponseEntity<>(emails, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Email> addEmail(@RequestBody Email email) {
        Email newEmail = emailService.addEmail(email);
        return new ResponseEntity<>(newEmail, HttpStatus.CREATED);
    }
}
