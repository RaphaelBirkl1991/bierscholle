package com.example.backend.repository;

import com.example.backend.entity.Stellenangebot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StellenangebotRepository extends JpaRepository<Stellenangebot, Long> {
}
