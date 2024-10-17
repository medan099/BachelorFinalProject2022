
package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Evenement;

import com.bezkoder.springjwt.repository.EvenementRepository;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EvenementService {
    private final EvenementRepository EvenementRepo;



    @Autowired
    public EvenementService(EvenementRepository EvenementRepo) {
        this.EvenementRepo = EvenementRepo;
    }

    public Evenement addEvenement(Evenement evenement) {

        return EvenementRepo.save(evenement);
    }

    public List<Evenement> findAllEvenements() {
        return EvenementRepo.findAll();
    }

    public Evenement updateEvenement(Evenement evenement) {

        return EvenementRepo.save(evenement);
    }



    public void deleteEvenement(Long id){
        EvenementRepo.deleteEvenementById(id);
    }
}
