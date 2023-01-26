package com.example.backend.repository;


import com.example.backend.entity.Kontakt;
import com.example.backend.entity.Kunde;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KontaktRepository extends JpaRepository <Kontakt, Long> {

}
