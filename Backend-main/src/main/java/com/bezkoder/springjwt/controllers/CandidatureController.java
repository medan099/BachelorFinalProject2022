package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Candidature;
import com.bezkoder.springjwt.security.services.CandidatureService;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/candidature")
public class CandidatureController {
    private final CandidatureService candidatureService;

    public CandidatureController(CandidatureService candidatureService) {
        this.candidatureService = candidatureService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Candidature>> getAllCandidatures () {
        List<Candidature> candidatures = candidatureService.findAllCandidatures();
        return new ResponseEntity<>(candidatures, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Candidature> addCandidature(@RequestBody Candidature candidature) {
        Candidature newCandidature = candidatureService.addCandidature(candidature);
        return new ResponseEntity<>(newCandidature, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Candidature> updateCandidature(@RequestBody Candidature candidature) {
        Candidature updateCandidature = candidatureService.updateCandidature(candidature);
        return new ResponseEntity<>(updateCandidature, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCandidature(@PathVariable("id") Long id) {
        candidatureService.deleteCandidature(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> findCandidature(@PathVariable("id") Long id) {
        Optional<Candidature> candidature =candidatureService.findCandidature(id);
        return new ResponseEntity<>(candidature,HttpStatus.OK);
    }

}
