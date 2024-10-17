
package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Projet;

import com.bezkoder.springjwt.repository.ProjetRepository;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProjetService {
    private final ProjetRepository ProjetRepo;



    @Autowired
    public ProjetService(ProjetRepository ProjetRepo) {
        this.ProjetRepo = ProjetRepo;
    }

    public Projet addProjet(Projet projet) {

        return ProjetRepo.save(projet);
    }

    public List<Projet> findAllProjets() {
        return ProjetRepo.findAll();
    }

    public Projet updateProjet(Projet projet) {

        return ProjetRepo.save(projet);
    }



    public void deleteProjet(Long id){
        ProjetRepo.deleteProjetById(id);
    }
}
