package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Projet;
import com.bezkoder.springjwt.security.services.ProjetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/projet")
public class ProjetController {
    private final ProjetService projetService;

    public ProjetController(ProjetService projetService) {
        this.projetService = projetService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Projet>> getAllProjets () {
        List<Projet> projets = projetService.findAllProjets();
        return new ResponseEntity<>(projets, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Projet> addProjet(@RequestBody Projet projet) {
        Projet newProjet = projetService.addProjet(projet);
        return new ResponseEntity<>(newProjet, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Projet> updateProjet(@RequestBody Projet projet) {
        Projet updateProjet = projetService.updateProjet(projet);
        return new ResponseEntity<>(updateProjet, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProjet(@PathVariable("id") Long id) {
        projetService.deleteProjet(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
