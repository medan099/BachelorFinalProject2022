package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Reclamation;
import com.bezkoder.springjwt.security.services.ReclamationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/reclamation")
public class ReclamationController {
    private final ReclamationService reclamationService;

    public ReclamationController(ReclamationService reclamationService) {
        this.reclamationService = reclamationService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Reclamation>> getAllReclamations () {
        List<Reclamation> reclamations = reclamationService.findAllReclamations();
        return new ResponseEntity<>(reclamations, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Reclamation> addReclamation(@RequestBody Reclamation reclamation) {
        Reclamation newReclamation = reclamationService.addReclamation(reclamation);
        return new ResponseEntity<>(newReclamation, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Reclamation> updateReclamation(@RequestBody Reclamation reclamation) {
        Reclamation updateReclamation = reclamationService.updateReclamation(reclamation);
        return new ResponseEntity<>(updateReclamation, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReclamation(@PathVariable("id") Long id) {
        reclamationService.deleteReclamation(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
