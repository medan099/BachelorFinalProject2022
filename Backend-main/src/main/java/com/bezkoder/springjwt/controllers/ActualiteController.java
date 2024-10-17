package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Actualite;
import com.bezkoder.springjwt.security.services.ActualiteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/actualite")
public class ActualiteController {
    private final ActualiteService actualiteService;

    public ActualiteController(ActualiteService actualiteService) {
        this.actualiteService = actualiteService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<Actualite>> getAllActualites () {
        List<Actualite> actualites = actualiteService.findAllActualites();
        return new ResponseEntity<>(actualites, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Actualite> addActualite(@RequestBody Actualite actualite) {
        Actualite newActualite = actualiteService.addActualite(actualite);
        return new ResponseEntity<>(newActualite, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Actualite> updateActualite(@RequestBody Actualite actualite) {
        Actualite updateActualite = actualiteService.updateActualite(actualite);
        return new ResponseEntity<>(updateActualite, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteActualite(@PathVariable("id") Long id) {
        actualiteService.deleteActualite(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
