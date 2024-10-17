
package com.bezkoder.springjwt.security.services;

import com.bezkoder.springjwt.models.Candidature;

import com.bezkoder.springjwt.repository.CandidatureRepository;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CandidatureService {
    private final CandidatureRepository CandidatureRepo;



    @Autowired
    public CandidatureService(CandidatureRepository CandidatureRepo) {
        this.CandidatureRepo = CandidatureRepo;
    }

    public Candidature addCandidature(Candidature candidature) {

        return CandidatureRepo.save(candidature);
    }

    public List<Candidature> findAllCandidatures() {
        return CandidatureRepo.findAll();
    }

    public Candidature updateCandidature(Candidature candidature) {

        return CandidatureRepo.save(candidature);
    }


    public void deleteCandidature(Long id){
        CandidatureRepo.deleteCandidatureById(id);
    }

    public Optional<Candidature> findCandidature(Long id){
      return CandidatureRepo.findCandidatureById(id);
    }


}
