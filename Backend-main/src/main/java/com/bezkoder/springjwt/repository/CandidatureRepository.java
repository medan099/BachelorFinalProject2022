package com.bezkoder.springjwt.repository;


import com.bezkoder.springjwt.models.Candidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


@Repository
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {

    void deleteCandidatureById(Long id);
    Optional<Candidature> findCandidatureById(Long id);





}
