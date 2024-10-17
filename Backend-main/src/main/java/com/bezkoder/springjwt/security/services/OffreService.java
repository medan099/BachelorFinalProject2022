
package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Offre;

import com.bezkoder.springjwt.repository.OffreRepository;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class OffreService {
    private final OffreRepository OffreRepo;



    @Autowired
    public OffreService(OffreRepository OffreRepo) {
        this.OffreRepo = OffreRepo;
    }

    public Offre addOffre(Offre offre) {

        return OffreRepo.save(offre);
    }

    public List<Offre> findAllOffres() {
        return OffreRepo.findAll();
    }

    public Offre updateOffre(Offre offre) {

        return OffreRepo.save(offre);
    }



    public void deleteOffre(Long id){
        OffreRepo.deleteOffreById(id);
    }
}
