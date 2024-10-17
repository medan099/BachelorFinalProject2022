
package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Actualite;

import com.bezkoder.springjwt.repository.ActualiteRepository;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ActualiteService {
    private final ActualiteRepository ActualiteRepo;



    @Autowired
    public ActualiteService(ActualiteRepository ActualiteRepo) {
        this.ActualiteRepo = ActualiteRepo;
    }

    public Actualite addActualite(Actualite actualite) {

        return ActualiteRepo.save(actualite);
    }

    public List<Actualite> findAllActualites() {
        return ActualiteRepo.findAll();
    }

    public Actualite updateActualite(Actualite actualite) {

        return ActualiteRepo.save(actualite);
    }



    public void deleteActualite(Long id){
        ActualiteRepo.deleteActualiteById(id);
    }
}
