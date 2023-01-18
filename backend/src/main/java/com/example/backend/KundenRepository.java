package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface KundenRepository extends JpaRepository<Kunde, Long> {
}
