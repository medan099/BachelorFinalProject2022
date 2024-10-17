package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Evenement;
import com.bezkoder.springjwt.security.services.EvenementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/evenement")
public class EvenementController {
    private final EvenementService evenementService;

    public EvenementController(EvenementService evenementService) {
        this.evenementService = evenementService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Evenement>> getAllEvenements () {
        List<Evenement> evenements = evenementService.findAllEvenements();
        return new ResponseEntity<>(evenements, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Evenement> addEvenement(@RequestBody Evenement evenement) {
        Evenement newEvenement = evenementService.addEvenement(evenement);
        return new ResponseEntity<>(newEvenement, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Evenement> updateEvenement(@RequestBody Evenement evenement) {
        Evenement updateEvenement = evenementService.updateEvenement(evenement);
        return new ResponseEntity<>(updateEvenement, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEvenement(@PathVariable("id") Long id) {
        evenementService.deleteEvenement(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
