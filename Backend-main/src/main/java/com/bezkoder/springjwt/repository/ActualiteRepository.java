package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.Actualite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ActualiteRepository extends JpaRepository<Actualite, Long> {

    void deleteActualiteById(Long id);



}
