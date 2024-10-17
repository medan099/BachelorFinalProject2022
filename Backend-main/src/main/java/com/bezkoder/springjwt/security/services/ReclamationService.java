
package com.bezkoder.springjwt.security.services;


import com.bezkoder.springjwt.models.Reclamation;
import com.bezkoder.springjwt.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;



import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ReclamationService {
    private final ReclamationRepository ReclamationRepo;



    @Autowired
    public ReclamationService(ReclamationRepository ReclamationRepo) {
        this.ReclamationRepo = ReclamationRepo;
    }

    public Reclamation addReclamation(Reclamation reclamation) {

        return ReclamationRepo.save(reclamation);
    }

    public List<Reclamation> findAllReclamations() {
        return ReclamationRepo.findAll();
    }

    public Reclamation updateReclamation(Reclamation reclamation) {

        return ReclamationRepo.save(reclamation);
    }



    public void deleteReclamation(Long id){
        ReclamationRepo.deleteReclamationById(id);
    }




}

