package com.example.backend.repository;

import com.example.backend.entity.Warenkorb;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarenkorbRepository extends JpaRepository<Warenkorb, Long>{
}
