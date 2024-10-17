package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Email;

import com.bezkoder.springjwt.repository.EmailRepository;
import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class E_mailService
{
    private final EmailRepository emailRepository;

    public E_mailService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;

    }

    public Email addEmail(Email email) {

        return emailRepository.save(email);
    }

    public List<Email> findAllEmails() {
        return emailRepository.findAll();
    }

}
