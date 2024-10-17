package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EvenementRepository extends JpaRepository<Evenement, Long> {

    void deleteEvenementById(Long id);



}
